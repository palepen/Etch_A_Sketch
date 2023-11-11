let gridSize = 60;

const container = document.querySelector('div');

container.style.width = '48em';
container.style.height = '48em';
container.style.backgroundColor = '#aaa';



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
        // columnDiv.style.flexGrow = Math.min(j + 1, gridSize - j - 1);
        // columnDiv.style.flexGrow = 1 << columnDiv.style.flexGrow;
        
        rowDiv.appendChild(columnDiv);
    }
    // rowDiv.style.flexGrow = Math.min(i + 1, gridSize - i - 1);
    // rowDiv.style.flexGrow = 1 << rowDiv.style.flexGrow;
    container.appendChild(rowDiv);
}

let clickDown = false;
const boxes = document.getElementsByClassName('columnDiv');
for(let i = 0; i < boxes.length; i++){
        const box = boxes[i]; 
        
        
        box.addEventListener('mouseup', () => {
            clickDown = false;
        });
        
        
        box.addEventListener('mousedown', () => {
            clickDown = true;
        });
        
        box.addEventListener('mouseover', () => {
            if(clickDown)
            {
                if(box.style.backgroundColor == 'white')
                box.style.backgroundColor = 'black';
            }
        });
}