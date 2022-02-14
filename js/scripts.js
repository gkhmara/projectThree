function createArray(poop) {
  let userArray = [];

  if(poop) {
    for (let i = 0; i <= poop; i++) {
      if (i.toString().includes("3")) {
        userArray.push("Won't you be my neighbor?");
      } else if (i.toString().includes("2")) {
        userArray.push("Beep");
      } else if (i.toString().includes("1")) {
        userArray.push("Boop");
      } else {
        userArray.push(i.toString());
      }
    }
  }
return userArray;
}

$(document).ready(function(){
  $("#userInput").submit(function(event){
  event.preventDefault();

  const num = document.getElementById("num").value;
  const output = createArray(num);

    if (Boolean(output) === true){
      $(".number").text(output);
    }

    $("#results").show();
    
    
  });
});



