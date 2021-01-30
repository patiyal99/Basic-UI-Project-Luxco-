const menu=document.querySelector('#mobile-menu');
const menuLinks=document.querySelector('.nav-menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

//Modal Items
const modal=document.getElementById('email-modal');
const openBtn=document.querySelector('.main-btn');
const closeBtn=document.querySelector('.close-btn');

//Click events
 openBtn.addEventListener('click', () => {
     modal.style.display='block';
 });

 closeBtn.addEventListener ('click',() =>{
    modal.style.display='none';
 });

 window.addEventListener('click',(e)=>{
     if(e.target === modal){
         modal.style.display='none'; 
     }
 })

 //Form Validation
 const form=document.getElementById('form');
 const name=document.getElementById('name');
 const email=document.getElementById('email');
 const password=document.getElementById('password');
 const passwordConfirm=document.getElementById('password-confirm');

 //Show error message
function showError(input,message){
     const formValidation=input.parentElement;
     formValidation.className='form-validation error';

     const errorMessage=formValidation.querySelector('p');
     errorMessage.innerText=message;
}

//Show valid message
function showValid(input){
    const formValidation=input.parentElement;
    formValidation.className='form-validation valid';
}

//Get Field Name

function getFieldName(input){
    return input.name.charAt(0).toUpperCase() +input.name.slice(1);
}

//Check Required Fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()== ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showValid(input);
        }
    })
}

//Check Input Lengths
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
    }
    else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showValid(input);
    }
}

//Check Passwords Match
function passwordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Passwords do not match')
    }
}

//Event Listeners
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    checkRequired([name,email,password,passwordConfirm]);
    checkLength(name,3,30);
    checkLength(password,8,25);
    checkLength(passwordConfirm,8,25);
    passwordMatch(password,passwordConfirm);
})