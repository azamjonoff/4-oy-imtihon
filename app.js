// 1)

// const words = "D:/Qudrat_c++/books/My_book.exe";

// let result = words.split("");

// console.log(result)

// 2)

// let arrBracket = [].reduce((acc, curVal) => {
//   acc += curVal;
//   return acc;
// }, 0);

// function getSum3(n) {
//   for (let i = 1; i < n; i++) {
//     if (i % 3 == 0) {
//       let result = arrBracket.push(i);
//     }
//   }
// }

// getSum3(6);

// console.log(arrBracket);

// 3)
// let finish = arrBracket.reduce((acc, curVal) => (acc += curVal))

// function daraja2(n) {
//   let sum = 0;
//   for (let i = n; i <= 2 * n; i++) {
//     sum += i * i;
//   }
//   return sum;
// }

// let n = 5;
// let result = daraja2(n);
// console.log(result);

// 4)

// const ismlar = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];

// function elementlarSoni(n) {
//   for (let i = 0; i < ismlar.length; i++) {
//     let soni = ismlar[i].length;
//     console.log(`${ismlar[i]}: ${soni}`);
//   }
// }

// elementlarSoni();

// 5)

// let a = +prompt("Birinchi sonni kiriting:");
// let b = +prompt("Ikkinchi sonni kiriting:");
// let c = +prompt("Uchinchi sonni kiriting:");
// let d = +prompt("To'rtinchi sonni kiriting:");
// let n = +prompt("Shu sonlar nechaga kopaysin:");

// console.log(a * n);
// console.log(b * n);
// console.log(c * n);
// console.log(d * n);

// 6)

// const a = [1, 2, 3, 4, 5, 6];

// let kichik = Math.min(a);
// let katta = Math.max(a);

// if (!kichik || !katta) {
//   console.log(0);
// } else {
//   console.log(kichik, katta);
// }

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
