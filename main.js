import { createBoard } from '/control.js';
import { Viewer } from '/render.js';

async function main() {
    let board = createBoard();
    let display = Viewer();
    board.print();
    display.board(board.get());

    let update = () => {
        board.update();
        display.board(board.get());
        board.print();
    }

    for (let i = 1; i <= 10; i++) {
        setTimeout(update, 1000 * i);
    }
}

main();