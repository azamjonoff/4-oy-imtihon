// 1)

// 2)

const numbers = [];

function getSum3(n) {
  for (let i = 1; i <= n.length; i++) {
    if (i % 3 == 0) {
      numbers.push(i);
    }
  }
  console.log(numbers);
}

getSum3(15);

// 3)

// let arrBracket = [];
// let finish = arrBracket.reduce((acc, curVal) => (acc += curVal));
// let n = 2;

// function daraja2(n) {
//   for (let i = 0; i <= n; i++) {
//     let result = (n + i) ** 2;
//     arrBracket.push(result);
//   }
// }

// console.log(arrBracket);

// 4)

// const ismlar = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// function elementlarSoni(n) {
//   for (let i = 0; i <= ismlar.length; i++) {
//     let soni = ismlar[i].split("").length();
//     console.log(ismlar[i], soni);
//   }
// }

// 5)

// let n = 3;
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };

// function getMultipleValues(n) {
//   let resa = obj.a * n;
//   let resb = obj.b * n;
//   let resc = obj.c * n;
//   let resd = obj.d * n;
// }

// let result = {
//   resa,
//   resb,
//   resc,
//   resd,
// };
// console.log(result);

// 6)

// const a = [1, 2, 3, 4, 5, 6];

// 7)

// const text = "Men Abdulaziz Programmerman".split("").some(() => {
//   " ";
// });

// console.log(text);

// 8)

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let otdi = pupils.forEach((ballari) => {
//   if (ballari.protcent >= 80) {
//     // console.group("Otganlar");
//     console.log(ballari.name + " Otdi");
//     // console.groupEnd;
//   } else {
//     // console.group("Otmaganlar");
//     console.log(ballari.name + " Otmadi");
//     // console.groupEnd;
//   }
// });

// 9)

// let massiv = [1, 3, 5, 7, 5, 7];

// function ochir(arr) {
//   return arr.reduce((acc, curVal) => {
//     if (acc.indexOf(curVal) === -1) {
//       acc.push(curVal);
//     }
//     return acc;
//   }, []);
// }

// let result = ochir(massiv);
// console.log(result);

// 10)

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// const ovolish = animals.reduce((acc, curVal) => {
//   if (!acc[curVal]) {
//     acc[curVal] = 1;
//   } else {
//     acc[curVal] += 1;
//   }

//   return acc;
// }, {});

// console.log(ovolish);
