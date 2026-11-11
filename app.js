function clickBtn(buttons) {
    let number = document.getElementById("lblNumbers").value;
    number += buttons.value;
    document.getElementById("lblNumbers").value=number;
}


function clickOperation(buttons) {
    let txtValue = document.getElementById("lblNumbers").value;

    if(buttons.value == "+"){
        txtValue += "+";
    }else if(buttons.value == "-"){
        txtValue += "-";

    }else if(buttons.value == "÷"){
        txtValue=txtValue + "/";

    }else if(buttons.value == "*"){
        txtValue=txtValue + "*";
    }

    document.getElementById("lblNumbers").value=txtValue;
}

function  clickBtnC(buttons){
    if(buttons.value == "C"){
        document.getElementById("lblNumbers").value="";
        document.getElementById("results").value="";
    }   
}


function clickCalculationProcess(){
    let txtValue = document.getElementById("lblNumbers").value;

    let operator = "" ;

    if (txtValue.includes("+")) {
        operator = "+";

    } else if (txtValue.includes("-")) {
        operator = "-";

    } else if (txtValue.includes("*")) {
        operator = "*";

    } else if (txtValue.includes("/")) {
        operator = "/";
    }

    let numbers = txtValue.split(operator);

    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);

    let result = 0;

    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        result = num1 / num2;
    }

    document.getElementById("results").value = result;

    let history = txtValue + " = " + result;

    calculatorHistory.push(history);


}
function clikFunctionshistory(){
    loadData();
}
function loadData() {

    document.getElementById("calculatorHistory").innerHTML = "";
    for (let data of calculatorHistory) {
        document.getElementById("calculatorHistory").innerHTML +=  data + "\n" ;
    }
}

// function clickBtnHI(){
//     if(lastResult !== ''){\
//         currentInput.lastResult;
//         resultDisplay.innerText=currentInput;
//         historyDisplay.innerText = "Ans = " + lastResult;
//     }
// }
     




