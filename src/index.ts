const message: string = 'Hello World';

console.log(message);

import { createInterface } from 'readline';
const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question('文字列を入力してください:', (line) => {
  //文字列が入力されるとここが実行される
  // console.log(`${line}が入力されました`);
  const result = line + 1000;
  console.log(result);
  rl.close();
});

const bigint = BigInt('foooooo');
console.log('bigint is', bigint); // SyntaxError: Cannot convert foooooo to a BigInt
