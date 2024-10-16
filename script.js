// 1- Reversed Words

// function reverseWords(str){
//     str = str.split(' ').reverse().join(' ')
//     return str;
//   }

// -------------------------------------------------------

// 2- Convert a string to an array

// function stringToArray(string) {
//   return string.split(" ");
// }

// -------------------------------------------------------

// 3- Total amount of points

// function points(games) {
//     let totalPoints = 0;

//     games.forEach(game => {
//       const [x, y] = game.split(':').map(Number);
//       if (x > y) {
//         totalPoints += 3;
//       } else if (x === y) {
//         totalPoints += 1;
//       }
//     });

//     return totalPoints;
//   }

// -------------------------------------------------------

// 4- Abbreviate a Two Word Name:

// function abbrevName(name) {
//   const initials = name.split(" ").map((word) => word.charAt(0).toUpperCase());
//   return initials.join(".");
// }

// -------------------------------------------------------

// 5- Do I get a bonus?:

// function bonusTime(salary, bonus) {
//     if (bonus){salary *= 10;}
//       return "£" + salary;
//     }

// -------------------------------------------------------

// 6 - Invert value :
//   function invert(numbers) {
//     return numbers.map((num) => -num);
//   };

// -------------------------------------------------------

// 7 - Keep Hydrated!:
// function litres(time) {
//     const waterLiters = time * 0.5;
//    return parseInt(waterLiters);
//    }

// -------------------------------------------------------

// 8 -Parse nice int from char problem :
// function getAge(inputString){
//     const girlAge = parseInt(inputString.charAt(0));
//      return girlAge;
//    }
// -------------------------------------------------------
