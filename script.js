let text = "Send your 10 different numbers";
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(prompt(text));
}
function printNumbers(i) {
  console.log("Your number is " + i);
}
numbers.forEach(printNumbers);
document.write(" Your numbers is " + " " + numbers);
