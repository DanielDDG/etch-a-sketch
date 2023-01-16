// Creates HTML elements and initializes variables.

const container = document.querySelector('#container');
const set = document.querySelector('.set');
const reset = document.querySelector('.reset');
let drawing = false;
container.classList.add('container');

// Creates the starting, default grid.

createGrid(16);

// Function that prompts user to set dimensions.

function setDimension() {

    let input = prompt('How many boxes would you like on each side?')
    if (input > 100) {
        alert('Please enter a number from 1 to 100.')
    } else {
        removeGrid();
        createGrid(input);
    }
}

// Function that if user enters number, it creates that number of divs ^2.

function createGrid(input) {

    let userInput = input;
    const squares = [userInput];

    container.style.gridTemplateColumns = 'repeat(' + userInput + ', auto)';
    container.style.gridTemplateRows = 'repeat(' + userInput + ', auto)';
    
    for (let i = 1; i <= userInput * userInput; i++) {
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

// Function that removes the created grid.

function removeGrid() {

    const getSquares = document.getElementById("container");

    while (getSquares.firstChild) {
        getSquares.removeChild(getSquares.lastChild);
    }
}

// Function that resets the grid.

function resetGrid () {
    removeGrid();
    createGrid(16);
}

set.addEventListener('click', setDimension);
reset.addEventListener('click', resetGrid);