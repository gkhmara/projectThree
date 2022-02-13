let userArray = [];

function myFunction() {
  num = document.getElementById("num").value;
    if (num) {

      for(let i = 0; i <= num; i++){
        userArray.push(i.toString());
      }

    }

}


function myFunction2() {

userArray.forEach(function(element, index) {
  if (element.includes("3")) {
    userArray[index] = "Won't you be my neighbor?";
  } else if (element.includes("2")) {
    userArray[index] = "Boop!";
  } else if (element.includes("1")) {
    userArray[index] = "Beep!";
  }
});

}










$(document).ready(function(){
  $("#userInput").submit(function(event){
    
    let numberInput = userArray;
    alert("num = " + num);
    

    //Name Question
    if (Boolean(numberInput) === false) {
      $("#numberOutput").hide();
      $("#error").show();
    } else if (Boolean(numberInput) === true){
      $(".number").text(numberInput);
      $("#error").hide();
      $("#numberOutput").show();
    }

    //Show Final Results
    $("#results").show();


    event.preventDefault();
  });
});



const numbers = ["3","2", "1", "12", "32", "99"];

numbers.forEach(function(element, index) {
    if (element.includes("3")) {
        numbers[index] = "Won't you be my neighbor?";
    } else if (element.includes("2")) {
      numbers[index] = "Boop!";
    } else if (element.includes("1")) {
      numbers[index] = "Beep!";
    }
});

console.log(numbers);


