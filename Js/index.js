const open=document.getElementById('open');
const conte_items=document.getElementById('conte-items');
const range=document.getElementById('range')
const box_book=document.getElementById('box_book')

open.addEventListener('click', ()=>{
    conte_items.classList.toggle('class_open')
})

range.addEventListener('input', (e)=>{
    box_book.style.transform=`rotateY(${e.target.value}deg)`
    console.log(e.target.value)
})