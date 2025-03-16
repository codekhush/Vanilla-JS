const formData = document.querySelector('.formData');
const Input = document.querySelector('.inpt');
const bottomSection = document.querySelector('.collection_area')

formData.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(Input.value!==''){
        const inputSubmit = Input.value
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const remBtn = document.createElement('button')
        li.textContent = inputSubmit
        li.appendChild(remBtn)
        remBtn.textContent='Remove'
        ul.appendChild(li)
        bottomSection.appendChild(ul)
        remBtn.classList.add('remBtn')

    Input.value = ''
    
    remBtn.addEventListener('click', ()=>{
        ul.removeChild(li)
    })
    }
    else{
        alert('Add any task first')
    }
})