// var hoge = "var変数";
// console.log(hoge);

// // varの変数は再宣言可能になりますsu
// var hoge = "再宣言になります";
// console.log(hoge);

// const hoge = "const変数";
// console.log(hoge);

// // const変数は上書きは不可能
// // hoge = "上書き";

// // 再現不可能
// const hoge = "さい宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val = {
//   name: '太朗',
//   age: 14,
// };
// val.name = '田中';
// val.address = '福岡';
// console.log(val);

// const fuga = ['サッカー','野球'];
// fuga[0] = '水泳';
// fuga.push("ラグビー");
// console.log(fuga);

// const name = "田中";
// const age = 24;
// // 私の名前は中田です。24歳です.

// // 従来の方法
// const message = "私の名前は" + name + "です。" + age + "歳です。";
// console.log(message);

// // テンプレート文字列を用いると
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;

/**
 * アロー関数
 */
// 従来の関数
// function func1(string) {
//   return string;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です "));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }
// console.log(func3(10,20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "山田",
//   age: 23
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["山田","20"];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */

//  const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
//  sayHello();
//  sayHello("山田");

/**
 * スプレッド構文  ...
 */
// 配列[の展開
// const arr1 = [1,2];
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//　まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//　配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [40,50];

// //コピー
// const arr6 = [...arr4];
// console.log(arr6);

// //結合
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */

const name = ["田中", "山田", "佐藤"];
// for (let index = 0; index < name.length; index++) {
//   console.log(name[index]);
// }

// const name2 = name.map((name)=> {
//   return name;
// })
// console.log(name2);

// mapには引数を複数とることができる
// name.map((name, index)=> console.log(`${index + 1}番目は${name}です`));

// // 配列の中から奇数だけを取得する
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   // 配列の中から2で割ってあまりが1の数字だけを取得する
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// 山田の時だけはさんを付けずにそれ以外の時はさんを付与
// const newNameArr = name.map((name) => {
//   if (name === "山田") {
//     return name
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// // 三桁数字の時にカンマを表示してくれる関数
// console.log(num.toLocaleString());

// // 変数numが文字列の場合は数値を入力してくださいと、typeofとは型を調べてくれる関数
// const formatNum = typeof num === 'number'? num.toLocaleString() : '数値を入力してください';
// console.log(formatNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 50));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// ||は左側がfalseなら右側を返すという意味になる
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = false;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
