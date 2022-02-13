let userArray = [];

function createArray() {
  let num = document.getElementById("num").value;
    if (num) {
      for(let i = 0; i <= num; i++){
        userArray.push(i.toString());
      }
    }
}

function replaceElements() {
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
    
    if (Boolean(userArray) === true){
      $(".number").text(userArray);
    }

    $("#results").show();
    
    event.preventDefault();
  });
});



