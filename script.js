let container = document.querySelector('div');
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)'



for(i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.style.height = '25px'
    div.style.width = '25px'
    div.style.backgroundColor ="black"
    div.classList.add('box')
    
    container.appendChild(div)  
}


container.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = 'white'
})

let button = document.querySelector('button')
button.addEventListener('click', () => {
    let div = document.querySelectorAll('div')
    div.forEach(div => {
        div.style.backgroundColor = 'black'
    })
    
})