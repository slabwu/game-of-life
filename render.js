let LENGTH = 142;
let ALIVE = 'O';

export function Viewer() {
    const create = (grid) => {
        $('container').innerHTML = '';
        grid.forEach((y, yIndex) => {
            y.forEach((x, xIndex) => {
                let index = yIndex * LENGTH + xIndex;
                addCell('div', $('container'), index);
            })
        })
        update(grid);
    }

    const update = (grid) => {
        grid.forEach((y, yIndex) => {
            y.forEach((x, xIndex) => {
                let index = yIndex * LENGTH + xIndex;
                select(index).style.backgroundColor = grid[yIndex][xIndex].state === ALIVE ? 'lime': 'black';
            })
        })
    }

    return { create, update }
}

const $ = (id) => document.getElementById(id);
const select = (id) => document.querySelector(`[data-id="${id}"]`);

function addCell(type, source, id) {
    const element = document.createElement(`${type}`);
    element.dataset.id = `${id}`;
    source.appendChild(element);
    return element;
}