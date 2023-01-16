// Creates HTML elements and initializes variables.

const container = document.querySelector('.container');
const button = document.querySelector('button');
const square = document.createElement('div');
const allSquares = document.getElementsByClassName('square');
let drawing = false;
square.classList.add('square');
container.appendChild(square);

// Function that prompts user to set dimensions.

function setDimension() {

    let input = prompt('How many boxes would you like on each side?')
    if (input > 100) {
        alert('Please enter a number from 1 to 100.')
    } else {
        createGrid(input);
    }
}

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
    
    container.style.gridTemplateColumns = 'repeat(' + input + ', auto)';
    container.style.gridTemplateRows = 'repeat(' + input + ', auto)';
    

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

createGrid(5);
button.addEventListener('click', setDimension);