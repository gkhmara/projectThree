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



//1-3 CURRENT
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

//1-4
//const array = [13, 12, 23];
const array = ["13", 5, 7, "2"]

let tempHold;

let testVariable = [];

let testArray = [];

function splitNumbers() {
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
    if (array[i] === array [i + 1]) {
      const id = array.indexOf(i);
      array.splice(id, i);
      alert(array.indexOf(i));
    }
  }
}

splitNumbers();
replace();
deleteDuplicate();
console.log(array);


//1-5
//const array = [13, 12, 23];
const array = ["13", 5, 7, "2"]

let originalString = 'GeeksForGeeks';
let newString;

function removeCharacter() {
  newString = originalString.replace('F', '');

}