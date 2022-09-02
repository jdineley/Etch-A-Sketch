const container = document.querySelector(".container");

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

