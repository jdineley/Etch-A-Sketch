// DOM node capture
const container = document.querySelector(".container");
const numSquaresBut = document.querySelector("#num-squares");
const rainbowBut = document.querySelector("#rainbow");
const singleColorBut = document.querySelector("#singleColor");
const resetBoardBut = document.querySelector("#reset")
const shadeBut = document.querySelector("#shade");

// Global inputs
let rainbowOn = false;
let shadeOn = false
let color = 'green'
let size = 4

// Event handlers
function resetBoard(e) {
    container.innerHTML = ''
    for (let i = 1; i <= size*size; i++){
        let div = document.createElement('div');
        div.classList.add("cell");
        div.setAttribute('data-opacity', '0')
        let width = 100/size;
        div.style.cssText = `width: ${width}%; aspect-ratio: 1/1; border: black 1px solid`
        container.append(div);
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', colorHandler)
    })
}

function changeBoardSize(e) {
    size = prompt('select the number of squares less than 60');
    resetBoard()
};

function rainbowColors(e){
    if (!rainbowOn) rainbowOn = true;
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

function choseColor(e) {
    rainbowOn = false;
    shadeOn = false;
    color = prompt('Choose a color');
}

function shade(e){
    rainbowOn = false;
    if(!shadeOn) {
        shadeOn = true; 
    }
    console.dir(e.target.getAttribute('class') === 'cell');
    if(e.target.getAttribute('class') === 'cell'){   
        console.dir(e.target.getAttribute('data-opacity'));
        let opacity = Number(e.target.getAttribute('data-opacity'));
        e.target.setAttribute('data-opacity', `${opacity+0.1}`)
        opacity = Number(e.target.getAttribute('data-opacity'))
        return `rgba(0,0,0,${opacity})`
    }


}

function colorHandler(e) {
        if(rainbowOn){
            e.target.style.backgroundColor = rainbowColors(e)
        } else if(shadeOn){
            e.target.style.backgroundColor = shade(e);
        } 
        else {
            e.target.style.backgroundColor = color;
        }
    }


// Intial load setup

resetBoard();



// Event listeners
numSquaresBut.addEventListener('click', changeBoardSize);

rainbowBut.addEventListener('click', rainbowColors);

singleColorBut.addEventListener('click', choseColor);

resetBoardBut.addEventListener('click', resetBoard);

shadeBut.addEventListener('click', shade);
