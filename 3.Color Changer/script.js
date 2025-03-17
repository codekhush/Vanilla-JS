const butTon = document.querySelector('.btn')
const floor = document.querySelector('.footer')

butTon.addEventListener('click', ()=>{
  // console.log('click');
  const arr = '123456abcdef';

  let pattern = '#'
  for(let i=0; i<6; i++){
    pattern=pattern+arr[Math.floor(Math.random()*arr.length)]
  }
  
  document.body.style.backgroundColor = `${pattern}`
  const p = document.createElement('p')
  p.textContent = `Color is ${pattern}`
  floor.textContent = p.textContent
  

})
