const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";



const calculate = (btnvalue) => {
    if(btnvalue === "=" && btnvalue !== ""){
        output = eval(output.replace("%", "/100"))
    }else if (btnvalue == "AC"){
        output = ""
    }else if(btnvalue ==="DEL"){
        output = output.toString().slice(0, -1);
    }else{
        if(output === "" && specialChars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
};

buttons.forEach((button) => {

    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

document.addEventListener("keydown", (event) => {
    const key = event.key;
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "/", "*", "-", "+", "=", "Enter", "Backspace"];
  
    if (allowedKeys.includes(key)) {
        event.preventDefault();

        if (key === "Backspace") {
            calculate("DEL");
        } else {
            calculate(key);
        }
    }
    
});
  