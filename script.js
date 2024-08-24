const wordleWord = "flask"; // The word to guess
let currentRow = 0;
let currentCol = 0;
const maxAttempts = 6;

// Create the game board
const board = document.getElementById('board');
for (let i = 0; i < maxAttempts; i++) {
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
                let guessedWord = '';
                for (let i = 0; i < 5; i++) {
                    guessedWord += tiles[currentRow * 5 + i].textContent.toLowerCase();
                }
                checkWord(guessedWord);
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
            let guessedWord = '';
            for (let i = 0; i < 5; i++) {
                guessedWord += tiles[currentRow * 5 + i].textContent.toLowerCase();
            }
            checkWord(guessedWord);
        }
    } else if (key.length === 1 && /[A-Z]/.test(key) && currentCol < 5) {
        tiles[currentRow * 5 + currentCol].textContent = key;
        currentCol++;
    }
});

// Check the guessed word
function checkWord(guessedWord) {
    if (guessedWord === wordleWord) {
        alert('Congratulations! You guessed the word!');
        // Optionally reset the game here
        return;
    }

    for (let i = 0; i < 5; i++) {
        const tile = tiles[currentRow * 5 + i];
        const letter = guessedWord[i];

        if (letter === wordleWord[i]) {
            tile.classList.add('correct');
        } else if (wordleWord.includes(letter)) {
            tile.classList.add('present');
        } else {
            tile.classList.add('absent');
        }
    }

    currentRow++;
    currentCol = 0;

    if (currentRow === maxAttempts) {
        alert(`Game Over! The word was: ${wordleWord}`);
        // Optionally reset the game here
    }
}
