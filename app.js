/* //SOLUTION1**********************************************USING LOOP ******
let mystudents = ["ahmad", "anas", "ali", ["widad", "layan", "esraa"]];//2dArray

let mystudents1 = [];
for (let i = 0; i < mystudents.length; i++) {
  if (Array.isArray(mystudents[i])) {
    for (let j = 0; j < mystudents[i].length; j++) {
      mystudents1.push(mystudents[i][j].toUpperCase());
    }
  } else {
    mystudents1.push(mystudents[i].toUpperCase());
  }
}

console.log(mystudents1);
//************************************************************* */
/* //third solution //  return to the original array

let mystudents = ["ahmad", "anas", "ali", ["widad", "layan", "esraa"]];//2dArray

let mystudents1 = [];
for (let i = 0; i < mystudents.length; i++) {
  if (Array.isArray(mystudents[i])) {
    let arr = [];
    for (let j = 0; j < mystudents[i].length; j++) {
      arr.push(mystudents[i][j].toUpperCase());
    }
    mystudents1.push(arr);
  } else {
    mystudents1.push(mystudents[i].toUpperCase());
  }
}

console.log(mystudents1);
//********************************************************* */
