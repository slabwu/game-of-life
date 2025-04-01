const WIDTH = 10;
const HEIGHT = 10;

const ALIVE = 'O';
const DEAD = 'X';

export function createBoard() {
    let grid = []
    for (let i = 0; i < HEIGHT; i++) {
        grid[i] = [];
        for (let j = 0; j < WIDTH; j++) {
            grid[i][j] = createCell(i, j)
        }
    }

    let tmp = JSON.parse(JSON.stringify(grid));

    let get = () => {
        return grid;
    }

    let print = () => {
        let string = ''
        for (let i = 0; i < HEIGHT; i++) {
            for (let j = 0; j < WIDTH; j++) {
                string += grid[i][j].state;
            }
            string += '\n';
        }

        console.log(string);
    }

    let update = () => {
        for (let i = 0; i < HEIGHT; i++) {
            for (let j = 0; j < WIDTH; j++) {
                //console.log(`cell x${j} y${i}, state: ${tmp[i][j].state}, neighbours: ${getNeighbours(i, j)}, newstate: ${getNewState(tmp[i][j].state, getNeighbours(i, j))}`)
                grid[i][j].state = getNewState(tmp[i][j].state, getNeighbours(i, j));
            }
        }
        tmp = JSON.parse(JSON.stringify(grid));
    }

    // let printn = () => {
    //     let string = 'PRINTING NUMBERS\n'
    //     for (let i = 0; i < HEIGHT; i++) {
    //         for (let j = 0; j < WIDTH; j++) {
    //             string += getNeighbours(i, j);
    //         }
    //         string += '\n';
    //     }
    //     console.log(string);
    // }

    // let printt = () => {
    //     let string = 'PRINTING TEMP\n'
    //     for (let i = 0; i < HEIGHT; i++) {
    //         for (let j = 0; j < WIDTH; j++) {
    //             string += tmp[i][j].state;
    //         }
    //         string += '\n';
    //     }
    //     console.log(string);
    // }


    let getNeighbours = (y, x) => {
        let aliveCount = 0;

        for (let i = y - 1; i <= y + 1; i++) {
            for (let j = x - 1; j <= x + 1; j++) {
                if (!(i === y && j === x) && i >= 0 && i < HEIGHT && j >= 0 && j < WIDTH) {
                    if (tmp[i][j].state == ALIVE) {
                        aliveCount++;
                    }
                }
            }
        }
        return aliveCount;
    }

    let getNewState = (state, neighbours) => {
        if (state === ALIVE && (neighbours === 2 || neighbours === 3)) {
            return ALIVE;
        } else if (state === DEAD && neighbours === 3) {
            return ALIVE;
        } else {
            return DEAD;
        }
    }

    return { get, print, update }
}

function createCell(y, x) {
    let state = Math.floor(Math.random() * 2) === 0 ? ALIVE : DEAD;

    return { state }
}