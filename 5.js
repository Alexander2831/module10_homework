let homeworkNums = [7,8,9,11,15,20,22,30];
let sum = 0;
console.log(homeworkNums.length)


for (let i = 0; i < homeworkNums.length; i++) {sum += homeworkNums[i]}
console.log(sum);

var arr = ["7","8","9","11","15","20","22","30"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});
