const Input = document.querySelector('.inpt')
const button = document.querySelector('.btn')

button.addEventListener('click', ()=>{
    if(Input.type==='password'){
        Input.type='text'
        button.textContent = 'Hide Password'
    }
    else{
        Input.type='password'
        button.textContent = 'Show Password'
    }
})