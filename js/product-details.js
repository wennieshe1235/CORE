//點擊'+' '-'按鍵，控制商品購買的數量input增加或減少

//確保你的 JavaScript 在 DOM 完全加載後執行。例如，可以使用 DOMContentLoaded 事件：
document.addEventListener('DOMContentLoaded', function() {
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
});
