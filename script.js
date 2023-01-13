let rows = 64;
let columns = 64;
let rainbow = 'on';


let root = document.documentElement;
const container = document.querySelector('.container');


createGrid();

// new size button
const newSizeBtn = document.querySelector('#newSizeBtn');
newSizeBtn.addEventListener('click', (e)=> {
    size = prompt("Enter a new desired size under 100:");
    while (size > 100 || size == null){
        size = prompt("Please enter a valid size:");
    }
    console.log(size)
    rows = size;
    columns = size;
    clearGrid();

})

// clear button
const clearBtn = document.querySelector('#clearBtn')
clearBtn.addEventListener('click', (e) => {
    clearGrid();
})

// rainbow button functions
const rainbowBtn = document.querySelector('#rainbowBtn')
rainbowBtn.addEventListener('click', (e) => {
    rainbowBtn.classList.toggle('active');
})

function setBoxListeners(){
    // add event listener to box and change box on hover
    allBoxes = document.querySelectorAll('.box')

    allBoxes.forEach(box => box.addEventListener('mouseover', (e) => {
        if (rainbowBtn.classList.contains('active')) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.style.backgroundColor = `#${randomColor}`
        }
        else {
            box.style.backgroundColor = `black`
        }
        box.classList.add("hovered")
    }))
}


function createGrid(){
    for(let i = 0; i<rows; i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        container.appendChild(rowDiv);
    }

    rowElements = document.querySelectorAll('.row')

    // for each rows, add 16 divs

    rowElements.forEach(row => {
        for(let i = 0; i<columns; i++){
            const columnDiv = document.createElement('column')
            columnDiv.classList.add('box');
            row.appendChild(columnDiv);
        }
        
    });
    setBoxListeners();
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
}




