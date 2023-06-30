let myForm =document.querySelector('form')
let i =document.querySelectorAll('i')
let first1 =document.querySelector('.first1')
let second2 =document.querySelector('.second2')
let fourth4 =document.querySelector('.fourth4')
let fifth5 =document.querySelector('.fifth5')
let first =document.querySelector('.first')
let second =document.querySelector('.second')
let fourth=document.querySelector('.fourth')
let fifth=document.querySelector('.fifth')
let name=document.getElementById("name")
let email=document.getElementById("email")
let pass=document.getElementById("pass")
let pass2=document.getElementById("pass2")

myForm.addEventListener("submit",function(e){
    if(name.value.length<5){
        e.preventDefault()
        first.innerHTML="Username Must be At Least 5 Characters";
        name.style.border="2px solid red"
    }else{
        name.style.border="2px solid green"
        first.innerHTML=""
        first1.classList="fa-solid fa-check"
    }
    if(email.value.length<15){
        e.preventDefault()
        email.style.border="2px solid red"
        second.innerHTML="Email Address Must Contain '@' ";
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
    if(pass2.value!=pass.value||pass2.value.length==0){
        e.preventDefault()
        pass2.style.border="2px solid red"
        fifth.innerHTML="Password Is Not The Same";
    }else{
        pass2.style.border="2px solid green"
        fifth.innerHTML=""
        fifth5.classList="fa-solid fa-check"
    }
})