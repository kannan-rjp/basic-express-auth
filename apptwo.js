// Importing express module
const express = require("express")
const app = express();
app.use(express.static('public'));


app.use((req, res, next) => {
    if (!req.get('Authorization')) {
        var err = new Error('Not Authorized')
        res.status(401).set('WWW-Authenticate', 'Basic')
        next(err)
    }
    else {
        var credentials = Buffer.from(req.get('Authorization').split(' ')[1], 'base64').toString().split(':')
        var username = credentials[0]
        var password = credentials[1]
        if (!(username == 'admin' && password == 'admin123')) {
            var err = new Error('Not Authorized')
            res.status(401).set('WWW-Authenticate', 'Basic')
            next(err)
        }
        res.status(200)
        next()
    }
})


// Handling GET / request
app.get("/", (req, res) => {
	res.sendFile(__dirname+'/index.html')
})

// Handling GET /hello request
app.get("/hello", (req, res) => {
	res.send("This is the hello response");
})
app.get("/data", (req, res) => {
	res.json([{id:1,name:'Fasi'}]);
})

// Server setup
app.listen(3003, () => {
	console.log("Server is Running")
})
