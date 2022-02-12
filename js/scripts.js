//1-1
//const array = [13, 12, 23];
const array = [55, 13, 9]

let testVariable;

let testArray = [];

function splitNumbers() {
  for (let i = 0; i < array.length; i++) {
    
    if (array[i]) {
      testVariable = array.join("|");
      testArray = testVariable.split("");
      for (let i = 0; i < testArray.length; i++){
        if (testArray[i] === "3"){
          testArray.splice(i, i, "Won't you be my neighbor");
        } else {
          // alert(testArray[i]);
        }
      }
    } else {
      //alert(array[i])
    }
  }
}

splitNumbers();
testArray;

//1-2
//const array = [13, 12, 23];
const array = [55, 131, 9]

let testVariable;

let testArray = [];

function splitNumbers() {
  testVariable = array.join("|");
  testArray = testVariable.split("")
}

function replaceNumbers() {
          for (let i = 0; i < testArray.length; i++){
            if (testArray[i] === "3"){
              testArray[i] = ("Won't you be my neighbor");
            } else {
              // alert(testArray[i]);
            }
          }
      }

splitNumbers();
replaceNumbers();
testArray;



//1-3 CURRENT-1.0
//const array = [13, 12, 23];
const array = [13, 12, 23, 55]

let testVariable;

let testArray = [];

function splitNumbers() {
  testVariable = array.join("|");
  testArray = testVariable.split("")
}

function replaceNumbers() {
          for (let i = 0; i < testArray.length; i++){
            if (testArray[i] === "3"){
              testArray[i] = ("Won't you be my neighbor");
            } else if (testArray[i] != "1" && testArray[i] != "2" && testArray[i] != "|"){
              testArray[i] = parseInt(testArray[i]);
            }
          }
      }

splitNumbers();
replaceNumbers();
testArray;


//1-3 CURRENT-1.1
//const array = [13, 12, 23];
const input = [13, 12, 23, 55, 9];

const array = [];

let tempHold;

let splitVariable = [];

let testVariable = [];

let testArray = [];

function splitNumbers() {
  splitVariable = input.join("|");
  testArray = splitVariable.split("")
}

function replaceNumbers() {
          for (let i = 0; i < testArray.length; i++){
            if (testArray[i] === "3"){
              testArray[i] = ("Won't you be my neighbor");
            } else if (testArray[i] != "1" && testArray[i] != "2" && testArray[i] != "|"){
             testArray[i] = parseInt(testArray[i]);
            }
          }
      }

function pushToNewArray() {
  testArray.forEach(function(element, index) {
    array.push(element);
  })
}

// function splitNumbersOut() {
//   for (let i = 0; i < array.length; i++) {
   
//     if (typeof(array[i]) === 'number') {
//       testVariable.push(array[i]);
//       tempHold = testVariable.join('');
//       tempHold = parseInt(tempHold);
//     }
//   }
// }

// function replace() {
//   for (let i = 0; i < array.length; i++) {
   
//     if (typeof(array[i]) === 'number') {
//       array[i] = tempHold;
//     }
//   }
// }

// function deleteDuplicate() {
//   for (let i = 0; i < array.length; i++) {
//     // console.log("index = " + index);
//     // console.log("array " + i + " = " + array[i]);
//     // console.log("array " + (i + 1) + " = " + array[i + 1]);
//     if (array[i] === array [i + 1]) {
//       array.splice(i, 1);
//     }
//   }
// }



splitNumbers();
replaceNumbers();
pushToNewArray();
//splitNumbersOut();
//replace();
//deleteDuplicate();
console.log(testArray);
console.log(input);
console.log(array);






//1-4 CURRENT-1.0
//const array = [13, 12, 23];
const array = ['1', "Won't you be my neighbor", '|', '1', '2', '|', '2', "Won't you be my neighbor", '|', 5, 5]

let tempHold;

let testVariable = [];

let testArray = [];

function splitNumbersOut() {
  for (let i = 0; i < array.length; i++) {
   
    if (typeof(array[i]) === 'number') {
      testVariable.push(array[i]);
      tempHold = testVariable.join('');
      tempHold = parseInt(tempHold);
    }
  }
}

function replace() {
  for (let i = 0; i < array.length; i++) {
   
    if (typeof(array[i]) === 'number') {
      array[i] = tempHold;
    }
  }
}

// function deleteDuplicate() {
//     const id = array.indexOf(57);
//     array.splice(id, 1);
//   }

function deleteDuplicate() {
  for (let i = 0; i < array.length; i++) {
    // console.log("index = " + index);
    // console.log("array " + i + " = " + array[i]);
    // console.log("array " + (i + 1) + " = " + array[i + 1]);
    if (array[i] === array [i + 1]) {
      array.splice(i, 1);
    }
  }
}

splitNumbersOut();
replace();
deleteDuplicate();
console.log(array);


//1-5
