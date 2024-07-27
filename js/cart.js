//確保你的 JavaScript 在 DOM 完全加載後執行。例如，可以使用 DOMContentLoaded 事件：
document.addEventListener('DOMContentLoaded', function() {

    //點擊'+' '-'按鍵，控制商品購買的數量input增加或減少
    const minus1 = document.querySelector('#minus1')
    const plus1 = document.querySelector('#plus1')
    const input1 = document.querySelector('#input1')
    
    
    minus1.addEventListener('click', function(){
        let currentValue = +(input1.value)
        let minValue = +(input1.getAttribute('min'))
        if(currentValue > minValue){
            input1.value = currentValue - 1
    
        }
    
    
    });
    
    plus1.addEventListener('click', function(){
        let currentValue = +(input1.value)
        let maxValue = +(input1.getAttribute('max'))
        if(currentValue < maxValue){
            input1.value = currentValue + 1
    
        }
        
    });

    const minus2 = document.querySelector('#minus2')
    const plus2 = document.querySelector('#plus2')
    const input2 = document.querySelector('#input2')
    
    
    minus2.addEventListener('click', function(){
        let currentValue = +(input2.value)
        let minValue = +(input2.getAttribute('min'))
        if(currentValue > minValue){
            input2.value = currentValue - 1
    
        }
    
    
    });
    
    plus2.addEventListener('click', function(){
        let currentValue = +(input2.value)
        let maxValue = +(input2.getAttribute('max'))
        if(currentValue < maxValue){
            input2.value = currentValue + 1
    
        }
        
    });

    const minus3 = document.querySelector('#minus3')
    const plus3 = document.querySelector('#plus3')
    const input3 = document.querySelector('#input3')
    
    
    minus3.addEventListener('click', function(){
        let currentValue = +(input3.value)
        let minValue = +(input3.getAttribute('min'))
        if(currentValue > minValue){
            input3.value = currentValue - 1
    
        }
    
    
    });
    
    plus3.addEventListener('click', function(){
        let currentValue = +(input3.value)
        let maxValue = +(input3.getAttribute('max'))
        if(currentValue < maxValue){
            input3.value = currentValue + 1
    
        }
        
    });

    const minus4 = document.querySelector('#minus4')
    const plus4 = document.querySelector('#plus4')
    const input4 = document.querySelector('#input4')
    
    
    minus4.addEventListener('click', function(){
        let currentValue = +(input4.value)
        let minValue = +(input4.getAttribute('min'))
        if(currentValue > minValue){
            input4.value = currentValue - 1
    
        }
    
    
    });
    
    plus4.addEventListener('click', function(){
        let currentValue = +(input4.value)
        let maxValue = +(input4.getAttribute('max'))
        if(currentValue < maxValue){
            input4.value = currentValue + 1
    
        }
        
    });

    const minus5 = document.querySelector('#minus5')
    const plus5 = document.querySelector('#plus5')
    const input5 = document.querySelector('#input5')
    
    
    minus5.addEventListener('click', function(){
        let currentValue = +(input5.value)
        let minValue = +(input5.getAttribute('min'))
        if(currentValue > minValue){
            input5.value = currentValue - 1
    
        }
    
    
    });
    
    plus5.addEventListener('click', function(){
        let currentValue = +(input5.value)
        let maxValue = +(input5.getAttribute('max'))
        if(currentValue < maxValue){
            input5.value = currentValue + 1
    
        }
        
    });

    const minus6 = document.querySelector('#minus6')
    const plus6 = document.querySelector('#plus6')
    const input6 = document.querySelector('#input6')
    
    
    minus6.addEventListener('click', function(){
        let currentValue = +(input6.value)
        let minValue = +(input6.getAttribute('min'))
        if(currentValue > minValue){
            input6.value = currentValue - 1
    
        }
    
    
    });
    
    plus6.addEventListener('click', function(){
        let currentValue = +(input6.value)
        let maxValue = +(input6.getAttribute('max'))
        if(currentValue < maxValue){
            input6.value = currentValue + 1
    
        }
        
    });

});