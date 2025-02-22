// Iteration 1: Names and Input
let hacker1 = 'Sina';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Martin';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals, finding out which name is longer
if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}

// Iteration 3: Loop for name in capitals and with space
let name = ``;
for (let i = 0; i < hacker1.length; i++) {
  name +=` ` + hacker1[i]
}
console.log(name.toUpperCase())

// Reverse loop 
let result = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
  result += hacker1[i];
}
console.log(result)

// Loop for lexicographic order
if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} 
else if (hacker1.localeCompare(hacker2) > 0) {
  console.log(`Yo, the navigator goes first definitely.`);    
} 
else {
  console.log(`What?! You both have the same name?`);
}
