# Mr. Roboger's Neighborhood

#### Greg Khmara

#### This is a website that creates a string of numbers, replaces some of the numbers, and returns an output to the user.

## Technologies Used

* HTML
* CSS

## Description

This site creates an array of numbers using the user's input as a stopping point. The numbers 1, 2, and 3 are then replaced with specific strings that change depending on if the element in the array has a 1, 2, or 3.

## Setup/Installation Requirements

* Clone the repo from Gitup
* Open index.html in browser

## Tests:

#### Describe: createArray()

- Test: "It will return an array of numbers using the user's input as a stopping point.}

- Code:

num = "10";

createArray();

- Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
---
---
#### Describe: replaceElements()

- Test: "It will replace the number 3 with the string "Won't you be my neighbor?" if 3 is present in the array."
- Code:
if (element.includes("3")) {
      userArray[index] = "Won't you be my neighbor?";
}
replaceElements();
- Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10]
---
- Test: "It will replace the number 2 with the string "Boop!" if 2 is present in the array."
- Code:
else if (element.includes("2")) {
      userArray[index] = "Boop!";
}
- Expected Output: [0, 1, "Boop!", 3, 4, 5, 6, 7, 8, 9, 10]
---
- Test: "It will replace the number 1 with the string "Beep!" if 1 is present in the array."
- Code:
else if (element.includes("1")) {
      userArray[index] = "Beep!";
}
- Expected Output:
[0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]
---
---

## Known Bugs

* No known bugs.

## License

MIT License

Copyright (c) 01-13-22 Greg Khmara  

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.