let container = document.getElementById('container')
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 1fr)'

function changeTheSize(element){
    let newContainer = document.createElement('section')
    newContainer.setAttribute('id','container')
    newContainer.classList.add('newContainer')
    for(i = 0; i < (element*element); i++){ 
        let div = document.createElement('div');
        div.style.backgroundColor ="black"
        div.classList.add('box')
        newContainer.appendChild(div)
        
    }
    newContainer.style.display = 'grid';
    newContainer.style.gridTemplateColumns = 'repeat('+element+', 1fr)'
    container = document.getElementById('container')
    let parentDiv = container.parentNode
    parentDiv.replaceChild(newContainer, container)
    newContainer.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = 'white'
        newContainer.style.backgroundColor = 'rgb(233, 178, 113)'
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
    container.style.backgroundColor = 'rgb(233, 178, 113)'
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
    let newSize = buttonForSize.value
    console.log(newSize)
    changeTheSize(newSize)
})