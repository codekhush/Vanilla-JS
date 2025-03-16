const textArea = document.querySelector('.text_area');
const bottomArea = document.querySelector('.bottom_area')

const handleTxtArea=()=>{
    
}

textArea.addEventListener('input', ()=>{
    var inputChar = textArea.value
    const charLength = inputChar.split('').length

    bottomArea.textContent = `${charLength}/100`

    if(charLength<=100){
        bottomArea.classList.remove('exceeded')
    }
    else{
        bottomArea.classList.add('exceeded')
        bottomArea.textContent = `${charLength}/100  Limit Exceeded`
    }
})

