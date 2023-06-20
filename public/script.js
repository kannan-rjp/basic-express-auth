// window.addEventListener('load',()=>{
//     console.log('Yeah load')   
// })
//err
const err = document.getElementsByClassName('err')
err.innerText='Please'
console.log(err)
//submit the action
const form = document.getElementById('product-form');
const product_input = document.getElementById('new-product-input');
console.log(product_input)
const rate_input = document.getElementById('new-productrate-input');
const desc_input = document.getElementById('new-producdesc-input');
const Onsubmit = document.getElementById('form-submit')
const dataCollection={};//index of an array
const products_collection = [];
Onsubmit.addEventListener('click',(e)=>{
    
    e.preventDefault();
    console.log(rate_input.value)
    if(product_input.value=='' || rate_input.value == '' || desc_input.value == '' ){
        alert('Please fill out the fields') ;
        return; 
    }
    // dataCollection["product_name"] = product_input.value;
    // dataCollection['rate'] = rate_input.value;
    // dataCollection['description'] = desc_input.value;
    // console.log(dataCollection,'****************');
    // products_collection.push(dataCollection);
    console.log(products_collection,'---------');
    const parent_products = document.getElementById('list-content')
    const products_list = document.createElement('div');
    products_list.classList.add('all-list');
    parent_products.appendChild(products_list);
    //these two div for data details and actions buttons
    const product_data = document.createElement('div');

    //create sample label and input element
    //label element create
    const val_title = document.createElement('label');
    val_title.innerText = 'Product Name'
    product_data.appendChild(val_title);
    //input element create
    const val_product = document.createElement('input');
    val_product.classList.add('show-product')
    val_product.setAttribute('readonly','readonly');
    val_product.type='text';
    val_product.value= product_input.value;
    product_data.appendChild(val_product);

    const product_action = document.createElement('div');
    product_action.classList.add('btn-content');
    //<div><button></button></div>  class="edit-btn btn" id="edit"
    //<div><button></button></div>  class="del-btn btn" id="delete"
    const edit_bt_div = document.createElement('div');
    const del_bt_div = document.createElement('div');
    //about edit
    const edit_bt = document.createElement('button');
    edit_bt.setAttribute('id','edit')
    edit_bt.classList.add('edit-btn','btn');
    edit_bt.innerText = 'Edit';
    edit_bt_div.appendChild(edit_bt);
    product_action.appendChild(edit_bt_div);
    //about delete
    const del_bt = document.createElement('button');
    del_bt.setAttribute('id','delete');
    del_bt.classList.add('del-btn','btn');
    del_bt.innerText = 'Delete';
    del_bt_div.appendChild(del_bt);
    product_action.appendChild(del_bt_div);
    
    products_list.append(product_data,product_action);

    console.log(products_list)
    //clear form fields
    product_input.value = '';
    rate_input.value='';
    desc_input.value='';
    //do action in edit button
    edit_bt.addEventListener('click',()=>{
        if(edit_bt.innerText.toLowerCase()=='edit'){
            val_product.removeAttribute('readonly');
            val_product.focus();
            edit_bt.innerText='Save';
        }
        else{
            // console.log('save')
            val_product.setAttribute('readonly','readonly');
            edit_bt.innerText='Edit';
        }
    });
    del_bt.addEventListener('click',()=>{
        products_list.remove();
    })
    //do action in delete button

    
})
// function formValidation(){
//     if(product_input.value==""){
//         err.innerHTML ='Plaese'
//     }
// }