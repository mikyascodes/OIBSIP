// switch between night and day mode
document.addEventListener("DOMContentLoaded", function () {
    let changeModeButton = document.querySelector(".toggle-button");
    let iconElement = document.querySelector(".fa-moon");
    let allElements = document.querySelectorAll(".light-mode");
    let body = document.querySelector("body");

    changeModeButton.addEventListener("click", function () {
        if (allElements[0].classList.contains("light-mode")) {
            for (let element of allElements) {
                element.classList.remove("light-mode");
            }
            body.classList.remove("light-mode");
            iconElement.classList.remove("fa-moon");
            iconElement.classList.add("fa-sun");
        } else {
            for (let element of allElements) {
                element.classList.add("light-mode");
            }
            body.classList.add("light-mode");
            iconElement.classList.remove("fa-sun");
            iconElement.classList.add("fa-moon");
        }
    });
});

// code for functioning of all button
//getting all the buttons
const Setting = document.querySelector(".btn-setting");
const Buttonx2 = document.querySelector(".btn-x2");
const Buttonxy = document.querySelector(".btn-xy");
const RadicButton = document.querySelector(".btn-radic");
const PiButton = document.querySelector(".btn-pi");
const LogButton = document.querySelector(".btn-log");
const LnButton = document.querySelector(".btn-ln");
const Buttone = document.querySelector(".btn-e");
const Buttonex = document.querySelector(".btn-ex");
const PercentButton = document.querySelector(".btn-percnt");
const BracketButton = document.querySelector(".btn-brackets");
const NumberButtons = document.querySelectorAll(".btn-num");
const OperatorButtons = document.querySelectorAll(".btn-op");
const FunctionButtons = document.querySelectorAll(".btn-fun");
const EqualButton = document.querySelector(".btn-equal");
const AllClearButton = document.querySelector(".btn-ac");
const ClearButton = document.querySelector(".btn-clear");
const display = document.querySelector(".display");

//control the size of the text in the display when the input get long
function updateSize() {
    const display = document.querySelector(".display");
    const parentWidth = display.parentNode.clientWidth;
    const currentLength = display.value.length;

    if (currentLength < 20) {
        display.style.fontSize = "2em";
    } else if (currentLength < 27) {
        display.style.fontSize = "1.5em";
    } else {
        display.style.fontSize = "1em";
    }

    const displayWidth = display.scrollWidth;
    while (
        displayWidth > parentWidth &&
        parseFloat(display.style.fontSize) > 0.5
    ) {
        display.style.fontSize = parseFloat(display.style.fontSize) - 0.1 + "em";
    }
}

//adding functionality to the buttons
// Event listener for number buttons
NumberButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const num = button.getAttribute("data-value");
        display.value += num;
        updateSize();
    });
});

// Event listener for operator buttons
OperatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const op = button.getAttribute("data-value");
        const lastChar = display.value.slice(-1);
        if (["+", "-", "*", "/", "."].includes(lastChar)) {
            display.value = display.value.slice(0, -1) + op;
        } else {
            display.value += op;
            updateSize();
        }
    });
});

// Event listener for bracket button
BracketButton.addEventListener("click", function () {
    const lastChar = display.value.slice(-1);
    const openBrackets = (display.value.match(/\(/g) || []).length;
    const closeBrackets = (display.value.match(/\)/g) || []).length;

    if (
        openBrackets > closeBrackets &&
        !["+", "-", "*", "/", "("].includes(lastChar)
    ) {
        display.value += ")";
        updateSize();
    } else {
        if (!lastChar || ["+", "-", "*", "/", "("].includes(lastChar)) {
            display.value += "(";
            updateSize();
        } else {
            display.value += "*(";
            updateSize();
        }
    }
});

// Event listener for equal button
let isExponentMode = false;
EqualButton.addEventListener("click", function () {
    try {
        const logRegex = /log\(\d+(\.\d+)?\)/g;
        const lnRegex = /ln\(\d+(\.\d+)?\)/g;
        const perRegex = /\d+(\.\d+)?%/g;
        const epowRegex = /e\^(-?\d+(\.\d+)?)/g;
        const sinRegex = /sin\(\d+(\.\d+)?\)/g;
        const cosRegex = /cos\(\d+(\.\d+)?\)/g;
        const tanRegex = /tan\(\d+(\.\d+)?\)/g;
        let expression = display.value;

        expression = expression.replace(logRegex, (match) => {
            const number = parseFloat(match.slice(4, -1));
            return Math.log10(number);
        });

        expression = expression.replace(lnRegex, (match) => {
            const number = parseFloat(match.slice(3, -1));
            return Math.log(number);
        });

        expression = expression.replace(perRegex, (match) => {
            const number = parseFloat(match.slice(0, -1));
            return number / 100;
        });

        expression = expression.replace(epowRegex, (match) => {
            const number = parseFloat(match.slice(2));
            return Math.pow(Math.E, number);
        });

        expression = expression.replace(sinRegex, (match) => {
            const number = parseFloat(match.slice(4, -1));
            const radians = number * (Math.PI / 180);
            return Math.sin(radians).toFixed(2);
        });

        expression = expression.replace(cosRegex, (match) => {
            const number = parseFloat(match.slice(4, -1));
            const radians = number * (Math.PI / 180);
            return Math.cos(radians).toFixed(2);
        });

        expression = expression.replace(tanRegex, (match) => {
            const number = parseFloat(match.slice(4, -1));
            const radians = number * (Math.PI / 180);
            return Math.tan(radians).toFixed(2);
        });

        if (isExponentMode) {
            const exponent = parseFloat(display.value);
            if (!isNaN(baseNumber) && !isNaN(exponent)) {
                display.value = Math.pow(baseNumber, exponent);
            } else {
                display.value = "Error";
            }
            isExponentMode = false;
            baseNumber = null;
        } else {
            display.value = eval(expression);
            updateSize();
        }

        display.value = eval(display.value);
        updateSize();
    } catch (e) {
        display.value = "Error";
        console.log(e);
    }
});

// Event listener for function buttons
FunctionButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const func = button.textContent;
        const currentDisplay = display.value;

        if (func === "log" || func === "ln") {
            const lastNumberMatch = currentDisplay.match(/-?\d+(\.\d+)?$/);
            if (lastNumberMatch) {
                const number = parseFloat(lastNumberMatch[0]);
                if (number <= 0) {
                    display.value = "Error";
                } else {
                    const result = func === "log" ? Math.log10(number) : Math.log(number);
                    display.value =
                        currentDisplay.slice(0, -lastNumberMatch[0].length) + result;
                }
            } else {
                display.value += func === "log" ? "log(" : "ln(";
            }
        } else if (func === "%") {
            display.value += "%";
        } else if (func === "e") {
            display.value += Math.E;
        } else if (func === "ex") {
            display.value += "e^";
        } else if (func === "x2") {
            const lastNumberMatch = currentDisplay.match(/(-?\d+(\.\d+)?)$/);
            if (lastNumberMatch) {
                const number = parseFloat(lastNumberMatch[0]);
                const result = Math.pow(number, 2);
                display.value =
                    currentDisplay.slice(0, -lastNumberMatch[0].length) + result;
            }
        } else if (func === "xy") {
            baseNumber = parseFloat(display.value);
            display.value = "";
            isExponentMode = true;
        } else if (func === "√") {
            const lastNumberMatch = currentDisplay.match(/(-?\d+(\.\d+)?)$/);
            if (lastNumberMatch) {
                const number = parseFloat(lastNumberMatch[0]);
                const result = Math.pow(number, 0.5);
                display.value =
                    currentDisplay.slice(0, -lastNumberMatch[0].length) + result;
            }
        } else if (func === "π") {
            display.value += Math.PI;
        }
        updateSize();
    });
});

// Event listener for clear button
ClearButton.addEventListener("click", function () {
    display.value = display.value.slice(0, -1);
    updateSize();
});

// Event listener for allclear button
AllClearButton.addEventListener("click", function () {
    display.value = "";
    display.style.fontSize = "2em"; 
});

/// dual functionality of button by clicking settings button
// i.e. add more operations to the calculator
function sinFunction() {
    const lastNumberMatch = display.value.match(/(-?\d+(\.\d+)?)$/);
    if (lastNumberMatch) {
        const degrees = parseFloat(lastNumberMatch[0]);
        const radians = degrees * (Math.PI / 180); // Convert degrees to radians
        const result = Math.sin(radians).toFixed(2);
        display.value =
            display.value.slice(0, -lastNumberMatch[0].length) +
            parseFloat(result);
        updateSize();
    } else {
        display.value += "sin(";
        updateSize();
    }
}

function cosFunction() {
    const lastNumberMatch = display.value.match(/(-?\d+(\.\d+)?)$/);
    if (lastNumberMatch) {
        const degrees = parseFloat(lastNumberMatch[0]);
        const radians = degrees * (Math.PI / 180);
        const result = Math.cos(radians).toFixed(2);
        display.value =
            display.value.slice(0, -lastNumberMatch[0].length) +
            parseFloat(result);
        updateSize();
    } else {
        display.value += "cos(";
        updateSize();
    }
}

function tanFunction() {
    const lastNumberMatch = display.value.match(/(-?\d+(\.\d+)?)$/);
    if (lastNumberMatch) {
        const degrees = parseFloat(lastNumberMatch[0]);
        const radians = degrees * (Math.PI / 180);
        const result = Math.tan(radians).toFixed(2);
        display.value =
            display.value.slice(0, -lastNumberMatch[0].length) +
            parseFloat(result);
        updateSize();
    } else {
        display.value += "tan(";
        updateSize();
    }
}

function inverseFunction() {
    const lastNumberMatch = display.value.match(/(-?\d+(\.\d+)?)$/);
    if (lastNumberMatch) {
        const number = parseFloat(lastNumberMatch[0]);
        const result = 1 / number;
        display.value =
            display.value.slice(0, -lastNumberMatch[0].length) +
            parseFloat(result.toFixed(2));
    } 
}

function factorialFunction() {
    const lastNumberMatch = display.value.match(/(-?\d+(\.\d+)?)$/);
    if (lastNumberMatch) {
        const number = parseFloat(lastNumberMatch[0]);
        let result = 1;
        for (let i = 2; i <= number; i++) {
            result *= i;
        }
        display.value =
            display.value.slice(0, -lastNumberMatch[0].length) +
            parseFloat(result.toFixed(2));
    } 
}

function radiansFunction() {
    const lastNumberMatch = display.value.match(/(-?\d+(\.\d+)?)$/);
    if (lastNumberMatch) {
        const degrees = parseFloat(lastNumberMatch[0]);
        const radians = degrees * (Math.PI / 180); 
        display.value =
            display.value.slice(0, -lastNumberMatch[0].length) +
            parseFloat(radians.toFixed(2));
    } 
}

function degreesFunction() {
    const lastNumberMatch = display.value.match(/(-?\d+(\.\d+)?)$/);
    if (lastNumberMatch) {
        const radians = parseFloat(lastNumberMatch[0]);
        const degrees = radians * (180 / Math.PI); 
        display.value =
            display.value.slice(0, -lastNumberMatch[0].length) +
            parseFloat(degrees.toFixed(2));
    } 
}

// Event listener for the setting button
Setting.addEventListener("click", function () {
    if (!Setting.classList.contains("clicked")) {
        Setting.classList.add("clicked");
        LnButton.innerHTML = "sin";
        LogButton.innerHTML = "cos";
        Buttone.innerHTML = "tan";
        Buttonex.innerHTML = "Inv";
        Buttonx2.innerHTML = "x!";
        Buttonxy.innerHTML = "Rad";
        RadicButton.innerHTML = "Deg";
        PiButton.innerHTML = "";
        BracketButton.innerHTML = "";
        PercentButton.innerHTML = "";

        // add event listeners for buttons
        LnButton.addEventListener("click", sinFunction);
        LogButton.addEventListener("click", cosFunction);
        Buttone.addEventListener("click", tanFunction);
        Buttonex.addEventListener("click", inverseFunction);
        Buttonx2.addEventListener("click", factorialFunction);
        Buttonxy.addEventListener("click", radiansFunction);
        RadicButton.addEventListener("click", degreesFunction);
    } else {
        Setting.classList.remove("clicked");
        LnButton.innerHTML = "ln";
        LogButton.innerHTML = "log";
        Buttone.innerHTML = "e";
        Buttonex.innerHTML = "e<sup>x</sup>"
        Buttonx2.innerHTML = "x<sup>2</sup>";
        Buttonxy.innerHTML = "x<sup>y</sup>";
        RadicButton.innerHTML = "&radic;";
        PiButton.innerHTML = "&pi;";
        BracketButton.innerHTML = "( )";
        PercentButton.innerHTML = "%";

        // Remove event listeners for buttons
        LnButton.removeEventListener("click", sinFunction);
        LogButton.removeEventListener("click", cosFunction);
        Buttone.removeEventListener("click", tanFunction);
        Buttonex.removeEventListener("click", inverseFunction);
        Buttonx2.removeEventListener("click", factorialFunction);
        Buttonxy.removeEventListener("click", radiansFunction);
        RadicButton.removeEventListener("click", degreesFunction);
    }
    updateSize();
});