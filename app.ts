const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const buttonElement = document.querySelector('button')!;
const para = document.querySelector("p");

const numArray: Array<number> = [];
const strArray: string[] = [];

type numOrString = number | string;
type result = {val:number;timeStamp:Date};

interface resobj {
    val:number;
    timeStamp:Date;
    }

function add2 (num1:numOrString , num2:numOrString){
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }else if( typeof num1 === "string" && typeof num2 === "string"){
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}

function printResult (resultObj:resobj){
    console.log(resultObj.val,resultObj.timeStamp)
}

buttonElement.addEventListener("click",()=>{
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add2(+num1,+num2);
    const stringResult = add2(num1,num2);
    numArray.push(result as number);
    strArray.push(stringResult as string)
    console.log(stringResult)
    console.log(result)
    printResult({val:result as number,timeStamp:new Date()})
    console.log(numArray,strArray)
})

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(() => {
        resolve("It Worked");
    }, 5000);
}).then((result)=>{
    console.log(result.split("W"))
})