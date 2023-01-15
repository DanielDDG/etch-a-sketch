/*

End Goal:

Create an Etch-A-Sketch program for a web browser.

Problems:

1. Create a webpage with a 16x16 grid of square divs (create them with JS). It's best to put
them in a div container which can go directly into your HTML file.

*/

// This is to create a square div.

const container = document.querySelector('.container');
const square1 = document.createElement('div');
container.appendChild(square1);