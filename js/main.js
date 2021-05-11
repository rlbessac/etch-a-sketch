const container = document.getElementById('sketch-container');
const gridSize = document.getElementById('grid-size')
const resetBtn = document.getElementById('reset-btn');
const colorBtn = document.getElementById('color-btn');

let color = '#000';

function main(){
    let number = parseInt(prompt('Enter a number 2 - 32'));
    clearGrid();
    createGrid(number);
    fillGrid(number);
}

function clearGrid() {
    container.innerHTML = '';
}

function createGrid(size){
    gridSize.textContent = `${size} x ${size}`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size){
    for(let i = 0; i < (size * size); i++){
        const pixel = document.createElement('div');
        pixel.classList = 'pixel';
        container.appendChild(pixel);
        pixel.addEventListener('mouseover', fillPixel);
    }
}

function fillPixel(e) {
    e.target.style.backgroundColor = `${color}`;
}

window.onload = main;

resetBtn.addEventListener('click', main);