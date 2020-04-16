const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if(randomNumber > 0.7) {
  alert("Greater than 0.7");
}

const arrayOfNumbers = [3, 4, 5];

for(let i = 0; i < arrayOfNumbers.length; i++) {
  console.log(arrayOfNumbers[i]);
}

for (const number of arrayOfNumbers) {
  console.log(number);
}

for(let i = arrayOfNumbers.length - 1; i >= 0; i--) {
  console.log(arrayOfNumbers[i]);
}

const randomNumber2 = Math.random();

if (randomNumber > 0.7 && randomNumber2 > 0.7 || randomNumber < 0.2 || randomNumber2 < 0.2) {
  alert('Another alert');
}