let gridSize = 16;
let gridColor = 'black';
let changeColor = false;
let blackColor = true;

const container = document.getElementById('container');

container.style.width = '42rem';
container.style.height = '42rem';

let clickDown = false;

function getRandNum(){
    return Math.floor(1000 * Math.random()) % 100;
}

function colorChanger()
{
    gridColor = `rgb(${getRandNum()}%, ${getRandNum()}%, ${getRandNum()}%)`;
    console.log(gridColor);
    return gridColor;
}

container.addEventListener('mousedown', () => {
    clickDown = true;
})

container.addEventListener('mouseup', () => {
    clickDown = false;
})



const colors = document.getElementById('colorInp');

colors.addEventListener('input', () => {
    gridColor = colors.value;
    blackColor = false;
});

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
                
                    if(changeColor)
                        gridColor = colorChanger();
                    else if(blackColor){
                        gridColor = 'black';
                    }

                    columnDiv.style.backgroundColor = gridColor;
            })
            columnDiv.addEventListener('mouseover', () => {

                if(clickDown){
                    if(changeColor)
                        gridColor = colorChanger();
                    else if(blackColor){
                        gridColor = 'black';
                    }
                    
                    columnDiv.style.backgroundColor = gridColor;
                }
            })

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
clearBtn.style.color = 'black';
clearBtn.style.backgroundColor = '#B9B4C7';
clearBtn.style.borderWidth = '1px';

clearBtn.addEventListener('click', () => {
    clearBtn.focus({ focusVisible: true });
    removeGrid();
    createGrid();
    
});

const rainBow = document.getElementById('Rainbow');
rainBow.style.color = 'black';
rainBow.style.backgroundColor = '#B9B4C7';
rainBow.style.borderWidth = '1px';


rainBow.addEventListener('click', () =>{
    if(!changeColor)
    {
        rainBow.style.backgroundColor = '#352F44';
        rainBow.style.color = 'white';
        rainBow.style.borderWidth = '2px';
        changeColor = true;
    }
    else
    {
        highlightrmv(rainBow);
        changeColor = false;
    }
});

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', ()=>{
    gridColor = 'black';
    removeGrid();
    createGrid();
    changeColor = false;
    highlightrmv(rainBow);
});

function highlightrmv(target){
    target.style.color = 'black';
    target.style.backgroundColor = '#B9B4C7';
    target.style.borderWidth = '1px';
}