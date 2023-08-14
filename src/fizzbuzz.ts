let fizzbuzz: Array<string> = [];
for (let i: number = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzbuzz.push('FizzBuzz');
  } else if (i % 5 === 0) {
    fizzbuzz.push('Buzz');
  } else if (i % 3 === 0) {
    fizzbuzz.push('Fizz');
  } else {
    fizzbuzz.push(i.toString());
  }
}

console.log(fizzbuzz.join(' '));
