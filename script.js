let container = document.querySelector('div');
container.style.display = 'grid';



for(i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.style.height = '40px'
    div.style.width = '40px'
    div.style.backgroundColor ="black"
    container.appendChild(div)  
}
container.style.gridTemplateColumns = 'repeat(16, 1fr)'

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