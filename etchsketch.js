// Creates HTML elements and initializes variables.

const container = document.querySelector('#container');
const set = document.querySelector('.set');
const reset = document.querySelector('.reset');
const shader = document.querySelector('.shader');
const rainbow = document.querySelector('.rainbow');
const normal = document.querySelector('.normal');
let resetDimension = 16;
let drawing = false;
let mode = 'normal';
container.classList.add('container');

// Creates the starting, default grid.

createGrid(16);

// Function that prompts user to set dimensions.

function setDimension() {

    let input = prompt('How many boxes would you like on each side?')
    resetDimension = input;
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

        if (mode === 'normal') {
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
        } else if (mode === 'shader') {
            let shade = 0.1;
            squares[i].addEventListener('mousedown', () => {
                squares[i].setAttribute('style', 'background-color: rgba(0, 0, 0, ' + shade +')');
                if (shade < 1) {
                    shade += 0.1;
                }
                drawing = true;
            });
            squares[i].addEventListener('mousemove', () => {
                if (drawing) {
                    squares[i].setAttribute('style', 'background-color: rgba(0, 0, 0, ' + shade +')');
                    if (shade < 1) {
                        shade += 0.1;
                    }
                }
            });
            squares[i].addEventListener('mouseup', () => {
                drawing = false;
            }); 
        } else {
            squares[i].addEventListener('mousedown', () => {
                squares[i].setAttribute('style', rainbowMode());
                drawing = true;
            });
            squares[i].addEventListener('mousemove', () => {
                if (drawing) {
                    squares[i].setAttribute('style', rainbowMode());
                }
            });
            squares[i].addEventListener('mouseup', () => {
                drawing = false;
            });
        }
    }
}

// Function that removes the created grid.

function removeGrid() {

    const getSquares = document.getElementById("container");

    while (getSquares.firstChild) {
        getSquares.removeChild(getSquares.lastChild);
    }
}

// Function that resets the grid on current dimension.

function resetGrid() {

    let getSquares = document.getElementById("container");
    squareLength = getSquares.length;

    while (getSquares.firstChild) {
        getSquares.removeChild(getSquares.lastChild);
    }

    createGrid(resetDimension);
}

function rainbowMode() {

    let rainbow = 'background-color: rgb(' + Math.floor(Math.random() * 255) + ', '
                                           + Math.floor(Math.random() * 255) + ', '
                                           + Math.floor(Math.random() * 255) + ')';           
    return rainbow;
}

function shaderMode() {

    for (let i = 0.1; i <= 1.1; i += 0.1) {
        let shader = 'background-color: rgba(0, 0, 0, ' + i +')';
        return shader;
    }
}

// Adding event listeners.

set.addEventListener('click', setDimension);
reset.addEventListener('click', resetGrid);
shader.addEventListener('click', () => {
    mode = 'shader';
    resetGrid();
});
rainbow.addEventListener('click', () => {
    mode = 'rainbow';
    resetGrid();
});
normal.addEventListener('click', () => {
    mode = 'normal';
    resetGrid();
});