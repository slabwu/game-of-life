import { createBoard } from '/control.js';
import { Viewer } from '/render.js';

async function main() {
    let board = createBoard();
    let display = Viewer();
    //board.print();
    display.create(board.get());

    let update = () => {
        board.update();
        display.update(board.get());
        //board.print();
    }

    for (let i = 1; i <= 1000; i++) {
        setTimeout(update, 100 * i);
    }
}

main();