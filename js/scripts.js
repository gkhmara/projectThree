const numbers = ["13", "12", "23"];

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


