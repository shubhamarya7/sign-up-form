let signupbtn = document.querySelector('.signupbtn')
let signinbtn = document.querySelector('.signinbtn')
let namefield = document.querySelector('.namefield')
let underline = document.querySelector('.underline')
let clickhere = document.querySelector('.clickhere')
let title = document.querySelector('.title')


signinbtn.addEventListener('click',()=>{
    namefield.computedStyleMap.maxHeight = '0';
    title.innerHTML = 'Sign In ';
    clickhere.innerHTML = 'Lost Password';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signupbtn.addEventListener('click',()=>{
    namefield.computedStyleMap.maxHeight = '600px';
    title.innerHTML = 'Sign Up ';
    clickhere.innerHTML = 'Password suggestion';
    signupbtn.classList.remove('disable');
    signinbtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});