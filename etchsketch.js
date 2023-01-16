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

// Drawing variable.

let drawing = false;
createGrid(16);


// Function that if user enters number, it creates that number of divs ^2.

function createGrid(input) {

    square.addEventListener('mousedown', () => {
        square.setAttribute('style', 'background-color: black;');
        drawing = true;
    });

    square.addEventListener('mousemove', () => {
        if (drawing) {
            square.setAttribute('style', 'background-color: black;');
        }
    });

    square.addEventListener('mouseup', () => {
        drawing = false;
    });
      
    const squares = [input];

    for (let i = 0; i <= input * input - 2; i++) {
        squares[i] = document.createElement('div');
        squares[i].classList.add('square');
        container.appendChild(squares[i]);

        squares[i].addEventListener('mousedown', () => {
            squares[i].setAttribute('style', 'background-color: black;');
            drawing = true;
        });

        squares[i].addEventListener('mousemove', () => {
            if (drawing) {
                squares[i].setAttribute('style', 'background-color: black;');
            }
        });

        squares[i].addEventListener('mouseup', () => {
            drawing = false;
        });
    }   
}
