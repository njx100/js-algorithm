function recursiveFunction(arr, num, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === num) {
    return true;
  }
  if (arr[mid] > num) return recursiveFunction(arr, num, start, mid);
  else return recursiveFunction(arr, num, mid, end);
}

let arr = [1, 3, 5, 7, 8, 9];
let x = 5;

if (recursiveFunction(arr, x, 0, arr.length)) console.log("number found!");
else console.log("number not found!");
