document.addEventListener('DOMContentLoaded', function() {
    //手機版商品分類區點擊向下按鈕，彈出產品分類項目
    const drop = document.querySelector('.drop-down')
    const textItem = document.querySelector('.text')
    const arrow = document.querySelector('.text-item img')

    
    textItem.addEventListener('click', function(){
        drop.classList.toggle('show')
        arrow.classList.toggle('rotate') 
        
    })

    
})