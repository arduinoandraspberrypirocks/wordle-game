const board = document.getElementById('board');
const keyboard = document.getElementById('keyboard');
const targetWord = 'flask';
let currentRow = 0;
let currentCol = 0;

// Initialize the board
for (let i = 0; i < 30; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `cell-${i}`;
    board.appendChild(cell);
}

// Initialize the keyboard
const keys = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
keys.forEach(key => {
    const keyButton = document.createElement('div');
    keyButton.classList.add('key');
    keyButton.textContent = key;
    keyButton.addEventListener('click', () => handleKeyClick(key));
    keyboard.appendChild(keyButton);
});

function handleKeyClick(key) {
    if (currentCol < 5 && currentRow < 6) {
        const cell = document.getElementById(`cell-${currentRow * 5 + currentCol}`);
        cell.textContent = key;
        currentCol++;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (currentCol === 5) {
            checkWord();
        }
    } else if (e.key === 'Backspace') {
        if (currentCol > 0) {
            currentCol--;
            const cell = document.getElementById(`cell-${currentRow * 5 + currentCol}`);
            cell.textContent = '';
        }
    } else if (keys.includes(e.key.toUpperCase())) {
        handleKeyClick(e.key.toUpperCase());
    }
});

function checkWord() {
    let guess = '';
    for (let i = 0; i < 5; i++) {
        guess += document.getElementById(`cell-${currentRow * 5 + i}`).textContent;
    }

    for (let i = 0; i < 5; i++) {
        const cell = document.getElementById(`cell-${currentRow * 5 + i}`);
        if (guess[i] === targetWord[i]) {
            cell.classList.add('correct');
        } else if (targetWord.includes(guess[i])) {
            cell.classList.add('present');
        } else {
            cell.classList.add('absent');
        }
    }

    if (guess === targetWord) {
        alert('You win!');
    } else {
        currentRow++;
        currentCol = 0;
        if (currentRow === 6) {
            alert('Game over! The word was ' + targetWord);
        }
    }
}
