let container = document.getElementById('container')
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)'

function changeTheSize(element){
    let newContainer = document.createElement('div')
    newContainer.setAttribute('id','container')
    for(i = 0; i < (element*element); i++){ 
        let div = document.createElement('div');
        div.style.backgroundColor ="black"
        div.classList.add('box')
        newContainer.appendChild(div)
        console.log(element)  
    }
    newContainer.style.display = 'grid';
    newContainer.style.gridTemplateColumns = 'repeat('+element+', 1fr)'
    container = document.getElementById('container')
    let parentDiv = container.parentNode
    parentDiv.replaceChild(newContainer, container)
    newContainer.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = 'white'
    })

}

for(i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.style.backgroundColor ="black"
    div.classList.add('box')
    container.appendChild(div)  
}


container.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = 'white'
})

let button = document.getElementById('button')
button.addEventListener('click', () => {
    let div = document.querySelectorAll('div')
    div.forEach(div => {
        div.style.backgroundColor = 'black'
    })    
})

let buttonForSize = document.getElementById("size")
buttonForSize.addEventListener('click', () =>{  
    let newSize = prompt('Enter a number between 0 and 99 for the next size')
    while(newSize >= 100){
        newSize = prompt('Please enter a number between 0 and 99')
    }
    changeTheSize(newSize)
})