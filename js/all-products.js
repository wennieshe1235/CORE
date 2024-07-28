document.addEventListener('DOMContentLoaded', function() {
    //手機版商品分類區點擊向下按鈕，彈出產品分類項目
    const drop = document.querySelector('.drop-down')
    const category = document.querySelector('.category')
    const arrow = document.querySelector('.category img')

    
    category.addEventListener('click', function(){
        drop.classList.toggle('show')
        arrow.classList.toggle('rotate') 
        
    })

    
})