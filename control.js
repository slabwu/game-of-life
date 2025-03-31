const LENGTH = 10;
const WIDTH = 10;

const ALIVE = 'O';
const DEAD = 'X';

export function createBoard() {
    let grid = []
    for (let i = 0; i < WIDTH; i++) {
        grid[i] = [];
        for (let j = 0; j < LENGTH; j++) {
            grid[i][j] = createCell()
        }
    }

    let getBoard = () => {
        return grid;
    }

    let print = () => {
        let string = ''
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < LENGTH; j++) {
                string += grid[i][j].state;
            }
            string += '\n';
        }

        console.log(string);
    }

    return { getBoard, print }
}

function createCell() {
    let generateState = () => Math.floor(Math.random() * 2) === 0 ? ALIVE : DEAD;
    let state = generateState()
    
    return { state }
}