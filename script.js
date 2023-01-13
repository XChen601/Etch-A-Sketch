let rows = 15;
let columns = 15;


const container = document.querySelector('.container');


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

allBoxes = document.querySelectorAll('.box')




