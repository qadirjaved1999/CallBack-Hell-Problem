// Benefit
// The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.

// Purpose
// if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function
console.log("We go to learn CallBack Function in Javascript.....");

// In this code of the function so this a toxic environment without callBack function
// const showResult = (param) => {
//   console.log("The Final Calculation is that => ", param);
// };
// const calculation = (num1, num2) => {
//   return num1 + num2;
// };
// let result = calculation(45, 76);
// showResult(result);

// Alternate of the above code use callBack function here
// const showResult2 = (param) => {
//   console.log("The Final Calculation with use CallBack functiion => ", param);
// };
// const calculation2 = (num1, num2, callback) => {
//   let sum = num1 + num2;
//   callback(sum);
// };
// calculation2(45, 76, showResult2);

// Remove Negative Number From Array Using CallBack function with Arrow function santax
// const myNumbers = [1, 4, -6, -2, 63, -34, 10];

// let result = removeNeg(myNumbers, (x) => x >= 0);
// console.log("Final Result => ", result);

// function removeNeg(number, calback) {
//   console.log("Array => ", number, "Arrow Function => ", calback);
//   const positiveArray = [];
//   for (const i of number) {
//     console.log(i);
//     if (calback(i)) {
//       positiveArray.push(i);
//     }
//   }
//   return positiveArray;
// }

// Alternate(Remove Negative Number From Array Using CallBack function without Arrow function use simple function and easy to understand my concept for this code Example)
//

// Example
// function testCallBack(myCallBack) {
//   console.log("Start Execuation");
//   setTimeout(function () {
//     myCallBack();
//   }, 3000);
//   console.log("End Execuation");
// }

// function isCallBack() {
//   console.log("CallBack Function is Executed");
// }

// testCallBack(isCallBack);

// CallBack Hell Example
function gettData(id, getNextData) {
  setTimeout(() => {
    console.log("Data Id => ", id);
    if (getNextData) {
      getNextData();
    }
  }, 3000);
}
console.log("Getting Data 1...");
gettData(4, () => {
  console.log("Getting Data 2...");
  gettData(34, () => {
    console.log("Getting Data 3...");
    gettData(67, () => {
      console.log("Getting Data 4...");
      gettData(98, () => {
        console.log("Getting Data 5...");
        gettData(875, () => {
          console.log("Getting Data 6...");
          gettData(7654);
        });
      });
    });
  });
});
