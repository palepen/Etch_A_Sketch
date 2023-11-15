let gridSize = 16;
let gridColor = 'black';
let changeColor = 0;

const container = document.getElementById('container');

container.style.width = '42rem';
container.style.height = '42rem';

let clickDown = false;

function getRandNum(){
    return Math.floor(1000 * Math.random()) % 100;
}

function setBtnStyle(target){
    target.style.color = 'black';
    target.style.backgroundColor = '#B9B4C7';
    target.style.borderWidth = '1px';
}

function colorChanger()
{
    return `rgb(${getRandNum()}%, ${getRandNum()}%, ${getRandNum()}%)`;
}
function highlightrmv(target){
    target.style.color = 'black';
    target.style.backgroundColor = '#B9B4C7';
    target.style.borderWidth = '1px';
}

container.addEventListener('mousedown', () => {
    clickDown = true;
})

container.addEventListener('mouseup', () => {
    clickDown = false;
})


function createGrid()
{
    for (let i = 0; i < gridSize; i++)
    {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'rowDiv';
        rowDiv.style.height = '100%'; 
     

        for(let j = 0; j < gridSize; j++)
        {
            const columnDiv = document.createElement('div');
            columnDiv.className = 'columnDiv';
            columnDiv.style.backgroundColor = 'white';
     

            columnDiv.addEventListener('mousedown', () => {

                    columnDiv.style.backgroundColor = colorSelect();
            })
            columnDiv.addEventListener('mouseover', () => {
                if(clickDown)
                    columnDiv.style.backgroundColor = colorSelect();
        
        });

            rowDiv.appendChild(columnDiv);
        }
        container.appendChild(rowDiv);
    }
}

createGrid();

function removeGrid()
{
    container.innerHTML = '';
}

const gridSizeDisplay = document.getElementById('sizeName');
const gridSizeInput = document.getElementById('sizeInp');

gridSizeInput.addEventListener('input', () => {
    removeGrid();
    gridSize = parseInt(gridSizeInput.value);
    gridSizeDisplay.textContent = `Size ${gridSize}X${gridSize}`;    
    createGrid();
});



const clearBtn = document.getElementById('eraseAll');
setBtnStyle(clearBtn);

clearBtn.addEventListener('click', () => {
    clearBtn.focus();
    removeGrid();
    createGrid();
    
});

const rainBow = document.getElementById('Rainbow');
setBtnStyle(rainBow)

rainBow.addEventListener('click', () =>{
    if(changeColor != 1)
    {
        rainBow.style.backgroundColor = '#352F44';
        rainBow.style.color = 'white';
        rainBow.style.borderWidth = '2px';
        changeColor = 1;
    }
    else
    {
        highlightrmv(rainBow);
        changeColor = 0;
    }
});

const resetBtn = document.getElementById('reset');
setBtnStyle(resetBtn);

resetBtn.addEventListener('click', ()=>{
    gridColor = 'black';
    removeGrid();
    createGrid();
    changeColor = 0
    highlightrmv(rainBow);
});

const colors = document.getElementById('colorInp');

colors.addEventListener('input', () => {
    highlightrmv(rainBow);

    changeColor = 2;    
});

function colorSelect()
{

    if(changeColor == 0)
        return 'black';
    else if(changeColor == 1)
        return colorChanger();
    else{
    
        return colors.value;       
    }
}


const surprise = document.getElementById('Link');

surprise.addEventListener('click', () =>{
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0&ab_channel=Duran", "_blank")
})