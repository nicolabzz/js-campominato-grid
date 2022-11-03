const boxGrid = document.querySelector('.grid');

const btn = document.querySelector('button');


btn.addEventListener('click', cardCreator);



function cardCreator() {
    
    boxGrid.innerHTML = '';
    
    const option = document.getElementById('difficulty');
    
    let i = 1;

    const boxArray = [];
    
    while (i <= option.value) {
        
        let cell = document.createElement('div');
        
        if (option.value === '100')
        {
            cell.classList.add('box');
        }
        else if (option.value === '81')
        {
            cell.classList.add('box9');
        }
        else if (option.value === '49')
        {
            cell.classList.add('box7');
        }
        
        cell.innerHTML = i;
        
        boxGrid.appendChild(cell);
        boxArray.push(cell.innerHTML);
        
        cell.addEventListener('click', function () {
            this.classList.toggle('active');
        });
        
        i++;

    };

};



// for (let i = 0; i < 100; i++) {

//     const cell = document.createElement('div');
//     cell.classList.add('box');
//     boxGrid.append(cell);
//     cell.append([i + 1]);

    



// };