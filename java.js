// java.js
const container = document.getElementById('grid-container');
const resizeBtn = document.getElementById('resize-btn');

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate square size based on container width (960px)
    const squareSize = 960 / size;
    
    // Create new grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

// Initial 16x16 grid
createGrid(16);

// Button click handler
resizeBtn.addEventListener('click', () => {
    let newSize = prompt('Enter number of squares per side (max 100):');
    
    // Validate input
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize <= 0) {
        alert('Please enter a valid number');
        return;
    }
    if (newSize > 100) {
        alert('Maximum size is 100');
        return;
    }
    
    // Create new grid
    createGrid(newSize);
});