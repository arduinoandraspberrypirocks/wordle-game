body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
}

h1 {
    margin-bottom: 20px;
}

.board-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.board {
    display: grid;
    grid-template-columns: repeat(5, 60px);
    grid-template-rows: repeat(6, 60px);
    gap: 5px;
}

.tile {
    width: 60px;
    height: 60px;
    border: 2px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #fff;
}

.correct {
    background-color: green;
    color: white;
}

.present {
    background-color: yellow;
    color: black;
}

.absent {
    background-color: gray;
    color: white;
}

.keyboard {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 5px;
    justify-content: center;
}

.keyboard button {
    height: 50px;
    font-size: 18px;
    cursor: pointer;
}
