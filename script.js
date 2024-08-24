const wordleWord = "flask"; // The word to guess
let currentRow = 0;
let currentCol = 0;

// Create the game board
const board = document.getElementById('board');
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        board.appendChild(tile);
    }
}

const tiles = board.getElementsByClassName('tile');

// Handle keyboard button clicks
document.querySelectorAll('.keyboard button').forEach(button => {
    button.addEventListener('click', () => {
        const letter = button.textContent;

        if (letter === 'Delete') {
            if (currentCol > 0) {
                currentCol--;
                tiles[currentRow * 5 + currentCol].textContent = '';
            }
        } else if (letter === 'Enter') {
            if (currentCol === 5) {
                let word = '';
                for (let i = 0; i < 5; i++) {
                    word += tiles[currentRow * 5 + i].textContent;
                }
                checkWord(word.toLowerCase());
            }
        } else if (currentCol < 5) {
            tiles[currentRow * 5 + currentCol].textContent = letter;
            currentCol++;
        }
    });
});

// Handle keyboard typing
document.addEventListener('keydown', (e) => {
    const key = e.key.toUpperCase();
    if (key === 'BACKSPACE') {
        if (currentCol > 0) {
            currentCol--;
            tiles[currentRow * 5 + currentCol].textContent = '';
        }
    } else if (key === 'ENTER') {
        if (currentCol === 5) {
            let word = '';
            for (let i = 0; i < 5; i++) {
                word += tiles[currentRow * 5 + i].textContent;
            }
            checkWord(word.toLowerCase());
        }
    } else if (key.length === 1 && /[A-Z]/.test(key) && currentCol < 5) {
        tiles[currentRow * 5 + currentCol].textContent = key;
        currentCol++;
    }
});

// Check the guessed word
function checkWord(word) {
    for (let i = 0; i < 5; i++) {
        const tile = tiles[currentRow * 5 + i];
        if (word[i] === wordleWord[i]) {
            tile.classList.add('correct');
        } else if (wordleWord.includes(word[i])) {
            tile.classList.add('present');
        } else {
            tile.classList.add('absent');
        }
    }
    currentRow++;
    currentCol = 0;
}
