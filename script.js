const app = document.querySelector('#app');

const sizeButton = document.createElement('button');
sizeButton.textContent = 'new canvas';
sizeButton.addEventListener('click', updateGrid);
app.appendChild(sizeButton);

const canvas = document.createElement('div');
canvas.classList.add('canvas');
app.appendChild(canvas);

function generateRandomRgb() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue}`;
}

function updateGrid() {
  cleanCanvas();
  let gridSize = getGridSize();
  generateGrid(gridSize);
}

function cleanCanvas() {
  canvas.innerHTML = '';
}

function getGridSize() {
  let gridSize = null;
  while (!gridSize || gridSize > 100) {
    gridSize = Number(prompt('enter the number of squares per side: (maximum 100)'));
  }
  return gridSize;
}

function generateGrid(fullGridSize) {
  for (let i = 0; i < fullGridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for(let j = 0; j < fullGridSize; j++) {
      const square = document.createElement('div');
      square.classList.add(`square`);
      square.addEventListener('mouseover', changeColor);
      row.appendChild(square);
    }
    canvas.appendChild(row);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = generateRandomRgb();
}

