// m+ m- are not working
let string = ""
let display = document.querySelector(".display")
let buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        if(e.target.textContent === "="){
            string = eval(string)
            display.value = string
        }
        else if(e.target.textContent === "x"){
            string += "*"
            display.value = string
        }
        else if(e.target.textContent === "C"){
            string = ""
            display.value= string
        }
        else{
            string += e.target.textContent
            display.value = string
        }
    })
});

eval