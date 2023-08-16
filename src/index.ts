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

// const bigint = BigInt('foooooo');
// console.log('bigint is', bigint); // SyntaxError: Cannot convert foooooo to a BigInt

const obj = {
  foo: 123,
  'foo bar': -500,
  '↑↓↑↓': 'やじるし',
};

console.log(obj.foo); // 123
console.log(obj['foo']); // 123
console.log(obj['foo bar']); // -500
console.log(obj['↑↓↑↓']); // ''

const rl2 = createInterface({ input: process.stdin, output: process.stdout });
const messages = {
  good: '0以上の数値が入力されました！',
  bad: '負の数値を入力しないでください！',
};

rl2.question('数値を入力してください:', (line) => {
  const num = Number(line);
  console.log(messages[num >= 0 ? 'good' : 'bad']);
  rl.close();
});

// 以下のコピーの参照元はfooのオブジェクト
const foo = { num: 1234 };
const bar = foo;
console.log(bar.num); //1234と表示される
bar.num = 0;
console.log(foo.num); //0と表示される

// スプレッド構文でのコピーは明示的なコピーとなる
const foo2 = { num: 1234 };
const bar2 = { ...foo }; //{num:1234}になる
console.log(bar2.num); //1234と表示される
bar2.num = 0;
console.log(foo2.num); //1234と表示される

// ただし！スプレッド構文でも、ネストしたオブジェクトは参照元のコピーのままなので注意！
// ネストしたオブジェクトも含めて全部コピーしたい場合は以下の方法かライブラリーを使用する
const foo3 = { obj: { num: 1234 } };
const bar3 = { ...foo3 };
bar3.obj.num = 0;
console.log(foo3.obj.num); // 0と表示される
const bar4 = { obj: { ...foo3.obj } }; //これならネストしたオブジェクトもコピー可能だが、記述が多くなる

// オブジェクトの型
const obj4 = {
  foo: 1234,
  bar: 'Hello, world!',
};
