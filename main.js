const nums = "000012340.0560";
console.log("🚀 ~ file: main.js:2 ~ nums:", nums);

const numArr = nums.split("");

const dotIndex = nums.indexOf(".");
if (dotIndex !== -1) {
  numArr.splice(dotIndex, 1);
}
console.log("🚀 ~ file: main.js:5 ~ numArr:", numArr);

let sigArr = [];
let NsigArr = [];

let firstNonZeroFound = false;

for (let i = 0; i < numArr.length; i++) {
  const num = numArr[i];
  console.log("🚀 ~ file: main.js:18 ~ num:", num);
  
  if (num !== "0" || firstNonZeroFound || i === numArr.length - 1) {
    sigArr.push(num);
    firstNonZeroFound = true;
  } else {
    NsigArr.push(num);
  }
}

console.log("🚀 ~ file: main.js:13 ~ sigArr:", sigArr);
console.log("🚀 ~ file: main.js:15 ~ NsigArr:", NsigArr);
console.log(" ")
console.log("Number of Significant Figures are", sigArr.length);
console.log("Number of Non-Significant Figures are", NsigArr.length);
