const LENGTH = 10;
const WIDTH = 10;

const ALIVE = 'O';
const DEAD = 'X';

export function createBoard() {
    let grid = []
    for (let i = 0; i < WIDTH; i++) {
        grid[i] = [];
        for (let j = 0; j < LENGTH; j++) {
            grid[i][j] = createCell(i, j)
        }
    }

    let get = () => {
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

    let update = () => {
        let string = ''
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < LENGTH; j++) {
                string += checkNeighbours(i, j);
            }
            string += '\n';
        }
        console.log(string);
    }

    let checkNeighbours = (y, x) => {
        let aliveCount = 0;

        for (let i = y - 1; i <= y + 1; i++) {
            for (let j = x - 1; j <= x + 1; j++) {
                if (!(i === y && j === x) && i >= 0 && i < WIDTH && j >= 0 && j < LENGTH) {
                    if (grid[i][j].state == ALIVE) {
                        aliveCount++;
                    }
                }
            }
        }
        return aliveCount;
    }

    // let getNewState = () => {
        
    // }

    return { get, print, update }
}

function createCell(y, x) {
    let state = Math.floor(Math.random() * 2) === 0 ? ALIVE : DEAD;

    return { state }
}