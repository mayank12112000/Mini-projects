let inputs = document.querySelectorAll("input")
let signUp = document.querySelector(".button")
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let repassword = document.querySelector("#repassword")
let allErrors = document.querySelectorAll("small")
let form = document.querySelector("form")
let successMsg = document.querySelector(".successMsg")
let userErr = document.querySelector(".usernameErr")
let passwordErr = document.querySelector(".passwordErr")
let emailErr = document.querySelector(".emailErr")
let repasswordErr = document.querySelector(".repasswordErr")


function handleclick(){
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    
    const haslowercase = lowercaseRegex.test(password.value)
    const hasuppercase = specialCharRegex.test(password.value)
    const hasnumber =  numberRegex.test(password.value)
    console.log("clicked")

    // input validations:
    if(username.value.length <3){
        userErr.innerText = "username should have atleast three characters"
    }
    if(!(email.value.includes("@") || email.value.includes(".") || email.value.includes(" "))){
        emailErr.innerText = "invalid email"
    }
    if(!(haslowercase && hasuppercase && hasnumber)){
        passwordErr.innerText = "password should have one number one lowercase character and one number"
    }
    if(!(password.value === repassword.value)){
        repasswordErr.innerText = "password does not match"
    }
    empty = true
    for(err of allErrors){
        console.log(err.value)
        if(!(err.innerText===undefined)){
            empty = false
            break
        }
    }
    if(!empty){
        signUp.innerText = "Sign Up"
        successMsg.innerText ="All fields are valid"
    }
    
}

signUp.addEventListener("click",handleclick)


const clearError = (event) =>{
    errMsg= event.target.nextElementSibling 
    ;errMsg.innerText = ""
}

for (inp of inputs){
    inp.addEventListener("click",clearError)
}

