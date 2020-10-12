const buttons = document.getElementById("buttons")

const screenOperation = document.getElementById("screen-operation");
const screenResult = document.getElementById("screen-result");

const Operation = {}

const operations = ["+", "-", "+/-", "%", "/", "*", "=", ","]

const writeOperation = text => {

    if (screenOperation.textContent.charAt(0) == 0 && operations.includes(text)) {
        return false;
    }

    if (operations.includes(screenOperation.textContent.charAt(screenOperation.textContent.length - 1) && operations.includes(text))) {
        screenOperation.textContent = screenOperation.textContent.substring(0, screenOperation.textContent.length)
    }

    if (screenResult.textContent != "0"){
        screenResult.textContent = "0"
        screenOperation.textContent = text;
    } else if (Operation.text == "0") {
        screenOperation.textContent = text;
    } else {
        screenOperation.textContent += text;
    }

    
    Operation.text = screenOperation.textContent;
}

const showAlert = () => {
    let alert = document.getElementsByClassName("alert")[0];
    alert.classList.add("show");
    setTimeout(() =>{
        alert.classList.remove("show")
    }, 2000)
}

const clearScreen = () => {
    screenOperation.textContent = "0";
    screenResult.textContent = "0";
}

const changeSing = () => {
    let number = parseInt(screenOperation.textContent);
}

const writeResult = () => {
    try{
        screenResult.textContent = eval(screenOperation.textContent).toString();
    } catch(error) {
        showAlert();
    }
}

buttons.addEventListener("click", (e) => {

    if (e.target.textContent === buttons.textContent){
        return false;
    }

    let pressedKey = e.target.textContent;
    Operation.text = screenOperation.textContent;
    Operation.length = screenOperation.textContent.length;
    switch (pressedKey) { 
        case "+/-":
            changeSing()  
        case "=": 
            writeResult();
            break;
        case ",":
            writeOperation(".")
            break;
        case "C":
            clearScreen()
            break;
        default:
            writeOperation(pressedKey);
            break;
    }
})
