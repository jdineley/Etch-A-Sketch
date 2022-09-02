const container = document.querySelector(".container");
const button = document.querySelector("button");


for (let i = 1; i <= 16; i++){
    let div = document.createElement('div');
    div.classList.add("cell");
    container.append(div);
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener('mouseover', (e) => {
        e.target.classList.add("hover");
    })
})

function buildBoard(size){
    container.innerHTML = ''
    for (let i = 1; i <= size*size; i++){
        let div = document.createElement('div');
        div.classList.add("new-cell");
        let width = 100/size;
        div.style.cssText = `width: ${width}%; aspect-ratio: 1/1; border: black 1px solid`
        container.append(div);
    }
    const cells = document.querySelectorAll(".new-cell");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            e.target.classList.add("hover");
        })
    })
}

function changeBoardSize() {
    let size = prompt('select the number of squares less than 60');
    buildBoard(size);

};

button.addEventListener('click', changeBoardSize);





