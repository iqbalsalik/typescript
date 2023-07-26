"use strict";
const num1Element = document.getElementById("num1");
const num2Element = document.getElementById("num2");
const buttonElement = document.querySelector('button');
const para = document.querySelector("p");
const numArray = [];
const strArray = [];
function add2(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.timeStamp);
}
buttonElement.addEventListener("click", () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add2(+num1, +num2);
    const stringResult = add2(num1, num2);
    numArray.push(result);
    strArray.push(stringResult);
    console.log(stringResult);
    console.log(result);
    printResult({ val: result, timeStamp: new Date() });
    console.log(numArray, strArray);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("It Worked");
    }, 5000);
}).then((result) => {
    console.log(result.split("W"));
});
