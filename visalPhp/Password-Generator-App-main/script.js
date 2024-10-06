// accesing the generate button ;
const generateButton=document.querySelector('.generate-button');
// acessing the password box ;
const passwordBox=document.querySelector('.password-box');

// password characters
const passwordLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12 34567890 {}[_]()*&!,.? ';
// const upperCaseLetters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// adding clickk event the generate button
generateButton.addEventListener('click',function () {


    
    // Aceesing the password range value
    const passwordLength=document.querySelector('.range-value').value;


    // displaying the password box only  when the user click the generate button

    passwordBox.classList.remove('hidden');  //removing the hidden classs in css

    // making the password first empty;
    let password="";


    for(let i=1; i<=passwordLength;i++){
        password+=passwordLetters[(Math.floor(Math.random()*passwordLetters.length))]
        
    }
    // displaying the password value
    passwordBox.value=password;
    
    
});
