/*

End Goal:

Create an Etch-A-Sketch program for a web browser.

Problems:

1. Create a webpage with a 16x16 grid of square divs (create them with JS). It's best to put
them in a div container which can go directly into your HTML file.

*/

// This is to create a square div.

const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('square');
container.appendChild(square);

createGrid(16);

/* Creating other divs for testing.

const square1 = document.createElement('div');
square1.classList.add('square');
container.appendChild(square1);

const square2 = document.createElement('div');
square2.classList.add('square');
container.appendChild(square2);

const square3 = document.createElement('div');
square3.classList.add('square');
container.appendChild(square3);

const square4 = document.createElement('div');
square4.classList.add('square');
container.appendChild(square4);

*/

// Function that if user enters number, it creates that number of divs ^2.

function createGrid(input) {

    const squares = [input];
    for (let i = 0; i <= input * input - 2; i++) {
        squares[i] = document.createElement('div');
        squares[i].classList.add('square');
        container.appendChild(squares[i]);
    }
}


