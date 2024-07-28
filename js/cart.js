//確保你的 JavaScript 在 DOM 完全加載後執行。例如，可以使用 DOMContentLoaded 事件：
document.addEventListener('DOMContentLoaded', function() {

    //點擊'+' '-'按鍵，控制商品購買的數量input增加或減少
    // const minus1 = document.querySelector('#minus1')
    // const plus1 = document.querySelector('#plus1')
    // const input1 = document.querySelector('#input1')
    
    
    // minus1.addEventListener('click', function(){
    //     let currentValue = +(input1.value)
    //     let minValue = +(input1.getAttribute('min'))
    //     if(currentValue > minValue){
    //         input1.value = currentValue - 1
    
    //     }
    
    
    // });
    
    // plus1.addEventListener('click', function(){
    //     let currentValue = +(input1.value)
    //     let maxValue = +(input1.getAttribute('max'))
    //     if(currentValue < maxValue){
    //         input1.value = currentValue + 1
    
    //     }
        
    // });

    // const minus2 = document.querySelector('#minus2')
    // const plus2 = document.querySelector('#plus2')
    // const input2 = document.querySelector('#input2')
    
    
    // minus2.addEventListener('click', function(){
    //     let currentValue = +(input2.value)
    //     let minValue = +(input2.getAttribute('min'))
    //     if(currentValue > minValue){
    //         input2.value = currentValue - 1
    
    //     }
    
    
    // });
    
    // plus2.addEventListener('click', function(){
    //     let currentValue = +(input2.value)
    //     let maxValue = +(input2.getAttribute('max'))
    //     if(currentValue < maxValue){
    //         input2.value = currentValue + 1
    
    //     }
        
    // });



    //以下為電腦版，數量增加刪減的js
    
    const minus4 = document.querySelector('#minus4')
    const plus4 = document.querySelector('#plus4')
    const input4 = document.querySelector('#input4')
    const unitPrice4 = document.querySelector('#a4')
    const unitPrice4Text = unitPrice4.textContent //獲取a連結文字中的內容
    const unitPrice4Number = parseInt(unitPrice4Text.replace('$', '').trim())
    const cartAmount4 = document.querySelector('#p4')
    const shippingSelect = document.querySelector('#shipping')
    const preTotal = document.querySelector('.count > p')
    const shippingFee = document.querySelector('.shipping-fee > p')
    const totalFee = document.querySelector('.total-fee > p')
    const minus6 = document.querySelector('#minus6')
    const plus6 = document.querySelector('#plus6')
    const input6 = document.querySelector('#input6')
    const unitPrice6 = document.querySelector('#a6')
    const unitPrice6Text = unitPrice6.textContent //獲取a連結文字中的內容
    const unitPrice6Number = parseInt(unitPrice6Text.replace('$', '').trim())
    const cartAmount6 = document.querySelector('#p6')
    let shippingprice = 0



    const preTotalArr = [cartAmount4, cartAmount6]
    
    function updatePreTotal() {
        let sum = 0
        for(let i = 0; i < preTotalArr.length; i++){
    
            sum = sum + parseInt(preTotalArr[i].textContent.replace('$', '').trim())
            preTotal.innerHTML = `$${sum}`
    
        }
       
    }


    
    //計算總金額
    function updateTotalFee() {
        const updateTotalFeeArr = [parseInt(preTotal.textContent.replace('$', '').trim()), parseInt(shippingprice)]
        let sum = 0
        for(let i = 0; i < updateTotalFeeArr.length; i++){
            
            sum = sum +  updateTotalFeeArr[i]
            totalFee.innerHTML = `$${sum}`
    
        
       
    }
}





   //運費事件聆聽，加入運費
    shippingSelect.addEventListener('change', function(){
        const shippingOption = shippingSelect.options[shippingSelect.selectedIndex]
        shippingprice = shippingOption.dataset.price
        shippingFee.innerHTML = `$${shippingprice}`
        updateTotalFee()
        
        

        
    })
    
    minus4.addEventListener('click', function(){
        let currentValue = +(input4.value)
        let minValue = +(input4.getAttribute('min'))
        if(currentValue > minValue){
            input4.value = currentValue - 1
    
        }
        

        //電腦版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"金額"和"小計"
        cartAmount4.innerHTML = `$${(input4.value) * unitPrice4Number}` 
        // preTotal.innerHTML = `$${parseInt(cartAmount4.textContent.replace('$', '').trim())}`
        updatePreTotal()
        updateTotalFee()
        

    
    });
    
    plus4.addEventListener('click', function(){
        let currentValue = +(input4.value)
        let maxValue = +(input4.getAttribute('max'))
        if(currentValue < maxValue){
            input4.value = currentValue + 1
    
        }

        //電腦版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"金額"和"小計"
        cartAmount4.innerHTML = `$${(input4.value) * unitPrice4Number}` 
        // preTotal.innerHTML = `$${parseInt(cartAmount4.textContent.replace('$', '').trim())}`
        updatePreTotal()
        updateTotalFee()

        
    });

    
    
    
    minus6.addEventListener('click', function(){
        let currentValue = +(input6.value)
        let minValue = +(input6.getAttribute('min'))
        if(currentValue > minValue){
            input6.value = currentValue - 1
    
        }
        //電腦版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"金額"和"小計"
        cartAmount6.innerHTML = `$${(input6.value) * unitPrice6Number}` 
        // preTotal.innerHTML = `$${parseInt(cartAmount6.textContent.replace('$', '').trim())}`
        updatePreTotal()
        updateTotalFee()
    
    
    });
    
    plus6.addEventListener('click', function(){
        let currentValue = +(input6.value)
        let maxValue = +(input6.getAttribute('max'))
        if(currentValue < maxValue){
            input6.value = currentValue + 1
    
        }
        //電腦版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"金額"和"小計"
        cartAmount6.innerHTML = `$${(input6.value) * unitPrice6Number}` 
        // preTotal.innerHTML = `$${parseInt(cartAmount6.textContent.replace('$', '').trim())}`
        updatePreTotal()
        updateTotalFee()
        
    });

    


    //以下為手機版，數量增加刪減的js

    const minus3 = document.querySelector('#minus3')
    const plus3 = document.querySelector('#plus3')
    const input3 = document.querySelector('#input3')
    
    
    minus3.addEventListener('click', function(){
        let currentValue = +(input3.value)
        let minValue = +(input3.getAttribute('min'))
        if(currentValue > minValue){
            input3.value = currentValue - 1
    
        }

        //手機版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"小計"
        cartAmount.innerHTML = `$${(input4.value) * unitPriceNumber}` 
        preTotal.innerHTML = `$${parseInt(cartAmount.textContent.replace('$', '').trim())}`
    
    
    });
    
    plus3.addEventListener('click', function(){
        let currentValue = +(input3.value)
        let maxValue = +(input3.getAttribute('max'))
        if(currentValue < maxValue){
            input3.value = currentValue + 1
    
        }

        //手機版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"小計"
        cartAmount.innerHTML = `$${(input4.value) * unitPriceNumber}` 
        preTotal.innerHTML = `$${parseInt(cartAmount.textContent.replace('$', '').trim())}`
        
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

        //手機版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"小計"
        cartAmount.innerHTML = `$${(input4.value) * unitPriceNumber}` 
        preTotal.innerHTML = `$${parseInt(cartAmount.textContent.replace('$', '').trim())}`
    
    
    });
    
    plus5.addEventListener('click', function(){
        let currentValue = +(input5.value)
        let maxValue = +(input5.getAttribute('max'))
        if(currentValue < maxValue){
            input5.value = currentValue + 1
    
        }
        cartAmount.innerHTML = `$${(input4.value) * unitPriceNumber}` 
        preTotal.innerHTML = `$${parseInt(cartAmount.textContent.replace('$', '').trim())}`

        //手機版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"小計"
        
    });

    
    


});