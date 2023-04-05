//Soal 1
// function compareNumbers(firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         return true;
//     } else if (firstNumber = secondNumber) {
//         return -1;
//     } else {
//         return false;
//     }
// }

// console.log(compareNumbers(5,8));


//Soal 2
// function reverseString(text) {
//     let reversed = "";
//     for (let i = text.length - 1; i >= 0; i--) {
//         reversed += text[i];
//     }
//     return reversed;
// }


// console.log(reverseString("Halo World and Coders"));
// console.log(reverseString("John Doe"));
// console.log(reverseString("Iam a bookworm"));
// console.log(reverseString("Coding is my hobby"));
// console.log(reverseString("super"));


//Soal 3
// function uruHuruf(text) {
//     let sorted = "";
//     for (let i = 0; i < text.length; i++) {
//       for (let j = i + 1; j < text.length; j++) {
//         if (text[j] < text[i]) {
//           let temp = text[i];
//           text = text.substring(0, i) + text[j] + text.substring(i + 1, j) + temp + text.substring(j + 1);
//         }
//       }
//       sorted += text[i];
//     }
//     return sorted;
//   }

//   // Test cases
//   console.log(uruHuruf('HALO'))
//   console.log(uruHuruf("qwerty"))
//   console.log(uruHuruf('qweryuiopasdfhjklzxcbnm'))


//Soal 4
// function isArithmeticProgression(numbers) {
//   if (numbers.length <= 2) {
//     return true;
//   }

//   let diff = numbers[1] - numbers[0];
//   for (let i = 2; i < numbers.length; i++) {
//     if (numbers[i] - numbers[i-1] !== diff) {
//       return false;
//     }
//   }
//   return true;
// }

// // test case
// console.log(isArithmeticProgression([1, 2, 3, 4, 5])); 
// console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
// console.log(isArithmeticProgression([2, 4, 6, 8])); 
// console.log(isArithmeticProgression([2, 6, 18, 58])); 


//Soal 5
// function treeStepAB(text) {
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === "a" && text[i + 4] === "b") {
//             return true;
//         } else if (text[i] === "b" && text[i + 4] === "a") {
//             return true;
//         }
//     }
//     return false;
// }


// console.log(treeStepAB("lane borrowed")); 
// console.log(treeStepAB("i am sick")); 
// console.log(treeStepAB("you are boring")); 
// console.log(treeStepAB("barbarian")); 
// console.log(treeStepAB("bacon and meat"));


//Soal 6
// function gcd(firstNumber, secondNumber) {
//     let fpb = 1;
//     for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
//       if (firstNumber % i === 0 && secondNumber % i === 0) {
//         fpb = i;
//       }
//     }
//     return fpb;
//   }
//   // test case
//   console.log(gcd(12, 16)); 
//   console.log(gcd(50, 40)); 
//   console.log(gcd(22, 99)); 


//Soal 7
// function isPrime(number) {
//     //Bilangan prima adalah bilangan bulat positif yang hanya bisa dibagi oleh 1  dan dirinya
//     //Bilangan bulat positif yang lebih besar atau sama dengan 2
//     if (number < 2) {
//         return false;
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// test case
// console.log(isPrime(3));
// console.log(isPrime(7));
// console.log(isPrime(6));
// console.log(isPrime(23));
// console.log(isPrime(33));

//Soal 8
function listPrima(angkaPertama, angkaKedua) {
    let bilPrima = [];
    for (let i = angkaPertama; i <= angkaKedua; i++) {
        if (i < 2) {
            continue; //melanjutkan dan mengabaikan angka kurang dari 2
        }
        let Prima = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                Prima = false;
                break;
            }
        }
        if (Prima) {
            bilPrima.push(i);
        }
    }
    return bilPrima;
}

// Contoh penggunaan fungsi:
console.log(listPrima(1, 5));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));
