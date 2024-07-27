
//確保你的 JavaScript 在 DOM 完全加載後執行。例如，可以使用 DOMContentLoaded 事件：
document.addEventListener('DOMContentLoaded', function() {

//點擊'+' '-'按鍵，控制商品購買的數量input增加或減少
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const input = document.querySelector('#input')


minus.addEventListener('click', function(){
    let currentValue = +(input.value)
    let minValue = +(input.getAttribute('min'))
    if(currentValue > minValue){
        input.value = currentValue - 1

    }


});

plus.addEventListener('click', function(){
    let currentValue = +(input.value)
    let maxValue = +(input.getAttribute('max'))
    if(currentValue < maxValue){
        input.value = currentValue + 1

    }
    
});

//下方商品敘述、model資訊，tab欄位點擊切換
const as = document.querySelectorAll('.detail-span > span')

for(let i = 0; i < as.length; i++){
    as[i].addEventListener('click', function(){
        //移除原有active
    document.querySelector('.detail-span  span.active').classList.remove('active')
    //新增active給點擊的項目
    this.classList.add('active')

    //下方資訊一一對應
    document.querySelector('.detail-content .scope .binding.active').classList.remove('active')
    document.querySelector(`.detail-content .scope .binding:nth-child(${i + 1})`).classList.add('active')
    
    })
    
    
}






});
