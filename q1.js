const input = [1, -5, 2, 10, -30, 29, 50];
var neg = [];
var sum = 0;
function sumOfPositive(input) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      neg.push(input[i]);
    }
    else{
        sum +=input[i]
    }
  }
  console.log(sum)
}
sumOfPositive([1, -5, 2, 10, -30, 29, 50]);
