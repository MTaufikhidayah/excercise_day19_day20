const express = require("express");

const app = express();
const port = 3000;

// excerice 2
// var myAge = 26;
// const myFinger = 10;

// console.log(myAge);
// console.log(myFinger);

// // excercise 3

// const name = "muhTaufikHidayah";
// var height = 1.74;
// var weight = 90;
// bmi = weight / height ** 2;
// console.log(bmi);

// if (bmi < 18.5) {
//   console.log("underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("normalweight");
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log("overweight");
// } else if (bmi >= 30) {
//   console.log("Obesity");
// }

// // excercise 4
// let casepandemi2021 = [10, 6, 8, 9, 11, 13];
// console.log(casepandemi2021);

// excercise 5
// const name = "muhTaufikHidayah";
// var height = 1.74;
// var weight = 90;
// bmi = weight / height ** 2;
// console.log(bmi);

// if (bmi < 18.5) {
//   console.log("underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("normalweight");
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log("overweight");
// } else if (bmi >= 30) {
//   console.log("Obesity");
// }

// // excercise 6

// let family = [
//   {
//     name: "taufik",
//     height: 1.74,
//     weight: 55,
//   },
//   {
//     name: "ayah",
//     height: 1.73,
//     weight: 70,
//   },

//   {
//     name: "ibu",
//     height: 1.68,
//     weight: 70,
//   },

//   {
//     name: "kaka",
//     height: 1.75,
//     weight: 60,
//   },
//   {
//     name: "adik",
//     height: 1.65,
//     weight: 55,
//   },
// ];

// for (x of family) {
//   bmi = x.weight / x.height ** 2;
//   if (bmi < 18.5) {
//     console.log("underweight");
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("normalweight");
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log("overweight");
//   } else if (bmi >= 30) {
//     console.log("Obesity");
//   }
// }

// // excercise 7

// function calculateBmi(weight, height) {
//   return weight / height ** 2;
// }

// function catagoryBmi(calculateBmi) {
//   if (calculateBmi < 18.5) {
//     return "underweight";
//   } else if (calculateBmi >= 18.5 && calculateBmi <= 24.9) {
//     return "normalweight";
//   } else if (calculateBmi >= 25 && calculateBmi <= 29.9) {
//     return "overweight";
//   } else if (calculateBmi >= 30) {
//     return "Obesity";
//   }
// }
// let family = [
//   {
//     name: "taufik",
//     height: 1.74,
//     weight: 80,
//   },
//   {
//     name: "ayah",
//     height: 1.73,
//     weight: 70,
//   },

//   {
//     name: "ibu",
//     height: 1.68,
//     weight: 70,
//   },

//   {
//     name: "kaka",
//     height: 1.75,
//     weight: 60,
//   },
//   {
//     name: "adik",
//     height: 1.65,
//     weight: 100,
//   },
// ];
// for (x of family) {
//   console.log(catagoryBmi(x.height, x.weight));
// }

// for (const x of family) {
//   let a = calculateBmi(x.height, x.weight);
//   let b = catagoryBmi(calculateBmi);
//   x.nilaibmi = calculateBmi;
//   x.katagori = b;
// }

// excercise 8
// function palindrome(str) {
//   var x = str.length - 1;

//   if (x === 1 || str.length === 0) {
//     return true;
//   }
//   if (str[0] === str[x]) {
//     return palindrome(str.slice(1, x));
//   }
//   return false;
// }

// console.log(palindrome("kasur"));
// console.log(palindrome("haji ijah"));
// console.log(palindrome("makam"));
// console.log(palindrome("katak"));
// console.log(palindrome("ojo"));

// excercise 9

// console.log(JSON.stringify(family));

// exercise 10
// app.get("/profile", (req, res) => {
//   const profile = [
//     {
//       name: "Taufik",
//       height: 1.74,
//       weight: 55,
//     },
//   ];

//   res.json(profile);
// });

// execercise 11

// function calculateBmi(weight, height) {
//   return weight / height ** 2;
// }

// function catagoryBmi(weight, height) {
//   let calculateBmi = weight / height ** 2;
//   if (calculateBmi < 18.5) {
//     return "underweight";
//   } else if (calculateBmi >= 18.5 && calculateBmi <= 24.9) {
//     return "normalweight";
//   } else if (calculateBmi >= 25 && calculateBmi <= 29.9) {
//     return "overweight";
//   } else if (calculateBmi >= 30) {
//     return "Obesity";
//   }
// }

// app.get("/profile", (req, res) => {
//   const profile = [
//     {
//       name: "Taufik",
//       height: 1.74,
//       weight: 55,
//     },
//   ];

//   for (data of profile) {
//     let cekBmi = calculateBmi(data.weight, data.height);
//     let status = catagoryBmi(data.weight, data.height);
//     data.bmi = cekBmi;
//     data.category = status;
//   }
//   res.json(profile);
// });

// excercise 12
// function calculateBmi(weight, height) {
//   return weight / height ** 2;
// }

// function catagoryBmi(weight, height) {
//   let calculateBmi = weight / height ** 2;
//   if (calculateBmi < 18.5) {
//     return "underweight";
//   } else if (calculateBmi >= 18.5 && calculateBmi <= 24.9) {
//     return "normalweight";
//   } else if (calculateBmi >= 25 && calculateBmi <= 29.9) {
//     return "overweight";
//   } else if (calculateBmi >= 30) {
//     return "Obesity";
//   }
// }

// let family = [
//   {
//     name: "taufik",
//     height: 1.74,
//     weight: 80,
//   },
//   {
//     name: "ayah",
//     height: 1.73,
//     weight: 70,
//   },

//   {
//     name: "ibu",
//     height: 1.68,
//     weight: 70,
//   },

//   {
//     name: "kaka",
//     height: 1.75,
//     weight: 60,
//   },
//   {
//     name: "adik",
//     height: 1.65,
//     weight: 100,
//   },
// ];

// let familyWithBmi = [];

// app.get("/bmi", (req, res) => {
//   let name = req.query.name;
//   let weight = req.query.weight;
//   let height = req.query.height;

//   if (name != null && weight != null && height != null) {
//     family.push({
//       name: name,
//       height: height,
//       weight: weight,
//     });
//   }
//   family.forEach((data) => {
//     let bmi = calculateBmi(data.weight, data.height);
//     let category = catagoryBmi(bmi);
//     familyWithBmi.push({
//       name: data.name,
//       height: data.height,
//       weight: data.weight,
//       bmi: bmi,
//       category: category,
//     });
//   });
//   res.json(familyWithBmi);
//   familyWithBmi = {};
// });

// excercise 13

app.use(express.json());

function calculateBmi(weight, height) {
  return weight / height ** 2;
}

function catagoryBmi(weight, height) {
  let calculateBmi = weight / height ** 2;
  if (calculateBmi < 18.5) {
    return "underweight";
  } else if (calculateBmi >= 18.5 && calculateBmi <= 24.9) {
    return "normalweight";
  } else if (calculateBmi >= 25 && calculateBmi <= 29.9) {
    return "overweight";
  } else if (calculateBmi >= 30) {
    return "Obesity";
  }
}

app.post("/bmi", (req, res) => {
  let name = req.body.name;
  let height = req.body.height;
  let weight = req.body.weight;
  let bmi = calculateBmi(weight, height);
  let category = catagoryBmi(bmi);

  res.json({
    name: name,
    height: height,
    weight: weight,
    bmi: bmi,
    category: category,
  });
});

app.listen(port, () => {
  console.log("app listening at http://localhost:${port}");
});
