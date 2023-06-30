let myForm =document.querySelector('form')
let i =document.querySelectorAll('i')
let second2 =document.querySelector('.second2')
let fourth4 =document.querySelector('.fourth4')
let second =document.querySelector('.second')
let fourth=document.querySelector('.fourth')
let email=document.getElementById("email")
let pass=document.getElementById("pass")

myForm.addEventListener("submit",function(e){
    if(email.value.length<15){
        e.preventDefault()
        email.style.border="2px solid red"
        second.innerHTML="Email Address Must Contain @";
    }else{
        email.style.border="2px solid green"
        second.innerHTML=""
        second2.classList="fa-solid fa-check"
    }
    if(pass.value.length<10){
        e.preventDefault()
        fourth.innerHTML="Password Must be At Least 10 Characters";
        pass.style.border="2px solid red"
    }else{
        fourth.innerHTML=""
        pass.style.border="2px solid green"
        fourth4.classList="fa-solid fa-check"
    }
})