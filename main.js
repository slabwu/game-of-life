import { createBoard } from '/control.js';

async function main() {
    let board = createBoard();
    board.print();

    let update = () => {
        board.update();
        board.print();
    }

    for (let i = 1; i <= 10; i++) {
        setTimeout(update, 1000 * i);
    }
}

main();