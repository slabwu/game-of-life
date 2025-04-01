export function Viewer() {
    const board = (grid) => {
        $('container').innerHTML = '';
        for (let y of grid) {
            for (let x of y) {
                addElement('div', $('container'), x.state);
            }
        }
    }

    return { board }
}

const $ = (id) => document.getElementById(id);

function addElement(type, source, content = '') {
    const element = document.createElement(`${type}`);
    element.innerHTML = `${content}`;
    source.appendChild(element);
    return element;
}