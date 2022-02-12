//1-1
const array = [13, 12, 23];

let testVariable;

let testArray = [];

function splitNumbers() {
  for (let i = 0; i < array.length; i++) {

    
    if (array[i]) {
      testVariable = array.join("|");
      testArray = testVariable.split("");
      for (let i = 0; i < testArray.length; i++){
        if (testArray[i] === "3"){
          testArray.push("boop");
        } else {
          alert(testArray[i]);
        }
      }
    } else {
      alert(array[i])
    }
  }
}

splitNumbers();
testArray;



//1-2
const array = [13, 12, 23];

let testVariable;

let testArray = [];

function sparateNumber() {
  array.forEach(function(element, index) {
    testVariable = array.join("");
    testArray = testVariable.split("");
  });
}

sparateNumber();
testArray;