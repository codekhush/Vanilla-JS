const textArea = document.querySelector('.text_area')
const displayText = document.querySelector('.display_text')
let count = 0
textArea.addEventListener('input', ()=>{
    // console.log(textArea.value);
    const input_word=textArea.value.trim().split(/\s+/).filter((words)=>words.length>0)
    
    displayText.textContent = input_word.length
})