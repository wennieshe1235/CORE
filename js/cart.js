//確保你的 JavaScript 在 DOM 完全加載後執行。例如，可以使用 DOMContentLoaded 事件：
document.addEventListener('DOMContentLoaded', function() {



    //以下為點選全部刪除，購物車數量消失，並顯示您的購物車無任何商品

    //電腦版
    const deleteA = document.querySelector('#delete')
    const itemlist1 = document.querySelector('.xs1-scope')
    const itemlist2 = document.querySelector('.xs2-scope')
    const nogoods = document.querySelector('.nogoods-1')

    const itemlist3 = document.querySelector('.xs1-scope-RWD')
    const itemlist4 = document.querySelector('.xs2-scope-RWD')

    const itemDelete1 = document.querySelector('#itemDelete1')
    const itemDelete2 = document.querySelector('#itemDelete2')

    const itemDelete3 = document.querySelector('#itemDelete3')

    const itemDelete4 = document.querySelector('#itemDelete4')

    deleteA.addEventListener('click', function(e){
        e.preventDefault()
        let confirmDelete = confirm('您確定要刪除所有商品嗎?')

        if(confirmDelete){
        itemlist1.classList.add('active')
        itemlist2.classList.add('active')
        nogoods.classList.add('active')
        preTotal.innerHTML = `NT$0`
        totalFee.innerHTML = `NT$0`
        shippingFee.innerHTML = `NT$`
        }

        

    })

     //以下為點選個別刪除圖，個別點選後，隱藏並更新小計和總金額的數字
     //電腦版

     function checkAllHidden() {
        const items = document.querySelectorAll('.xs1-scope, .xs2-scope');
        let allHidden = true;

        // 使用 forEach 遍歷所有項目
        items.forEach(function(item) {
            // 檢查當前項目是否包含 'active' 
            if (!item.classList.contains('active')) {
                allHidden = false; // 如果有任一項目沒有隱藏，設置 allHidden 為false
            }
        });

        // 如果所有項目都被隱藏，顯示 no goods
        if (allHidden) {
            nogoods.classList.add('active');
            preTotal.innerHTML = `NT$0`
            totalFee.innerHTML = `NT$0`
            shippingFee.innerHTML = `NT$`
        }
    }
    

     itemDelete1.addEventListener('click', function(){
        itemlist1.classList.add('active')
        
        preTotal.innerHTML = `NT$${((input4.value) * unitPrice4Number) + ((input6.value) * unitPrice6Number) - ((input4.value) * unitPrice4Number) }`

        

        totalFee.innerHTML = `NT$${preTotal.innerHTML.replace('NT$', '')}`
        checkAllHidden()
       
        
        


     })

     itemDelete2.addEventListener('click', function(){
        itemlist2.classList.add('active')
        
        preTotal.innerHTML = `NT$${((input4.value) * unitPrice4Number) + ((input6.value) * unitPrice6Number) - ((input6.value) * unitPrice6Number) }`

        // preTotal.innerHTML = `NT$${((input3.value) * unitPrice3Number) + ((input5.value) * unitPrice5Number) - ((input3.value) * unitPrice3Number) }`

        totalFee.innerHTML = `NT$${preTotal.innerHTML.replace('NT$', '')}`
        checkAllHidden()
        
     })
    

     itemDelete3.addEventListener('click', function(){
        itemlist3.classList.add('active')

        preTotal.innerHTML = `NT$${((input3.value) * unitPrice3Number) + ((input5.value) * unitPrice5Number) - ((input3.value) * unitPrice3Number) }`

        totalFee.innerHTML = `NT$${preTotal.innerHTML.replace('NT$', '')}`
        checkAllHidden()
        
     })

     itemDelete4.addEventListener('click', function(){
        itemlist4.classList.add('active')
        

        preTotal.innerHTML = `NT$${((input3.value) * unitPrice3Number) + ((input5.value) * unitPrice5Number) - ((input5.value) * unitPrice5Number) }`

        totalFee.innerHTML = `NT$${preTotal.innerHTML.replace('NT$', '')}`
        checkAllHidden()
        
     })


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
            preTotal.innerHTML = `NT$${sum}`
    
        }
       
    }


    
    //計算總金額
    function updateTotalFee() {
        const updateTotalFeeArr = [parseInt(preTotal.textContent.replace('NT$', '').trim()), parseInt(shippingprice)]
        let sum = 0
        for(let i = 0; i < updateTotalFeeArr.length; i++){
            
            sum = sum +  updateTotalFeeArr[i]
            totalFee.innerHTML = `NT$${sum}`
    
        
       
    }
}





   //運費事件聆聽，加入運費
    shippingSelect.addEventListener('change', function(){
        const shippingOption = shippingSelect.options[shippingSelect.selectedIndex]
        shippingprice = shippingOption.dataset.price
        shippingFee.innerHTML = `NT$${shippingprice}`
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
    const unitPrice3 = document.querySelector('#p3')
    const unitPrice3Text = unitPrice3.textContent //獲取a連結文字中的內容
    const unitPrice3Number = parseInt(unitPrice3Text.replace('$', '').trim())
    const cartAmount3 = parseInt(input3.value) * unitPrice3Number
    
    const minus5 = document.querySelector('#minus5')
    const plus5 = document.querySelector('#plus5')
    const input5 = document.querySelector('#input5')
    const unitPrice5 = document.querySelector('#p5')
    const unitPrice5Text = unitPrice5.textContent //獲取a連結文字中的內容
    const unitPrice5Number = parseInt(unitPrice5Text.replace('$', '').trim())
    const cartAmount5 = parseInt(input5.value) * unitPrice5Number

    
    
    function updatePreTotalRwd() {
        const preTotalArrRwd = [parseInt(input3.value) * unitPrice3Number, parseInt(input5.value) * unitPrice5Number]
        let sum = 0
        for(let i = 0; i < preTotalArrRwd.length; i++){
    
            sum = sum + preTotalArrRwd[i]
            preTotal.innerHTML = `NT$${sum}`
    
        }
       
    }
    
    minus3.addEventListener('click', function(){
        let currentValue = +(input3.value)
        let minValue = +(input3.getAttribute('min'))
        if(currentValue > minValue){
            input3.value = currentValue - 1
    
        }

        
        


        //手機版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"小計"
        
        updatePreTotalRwd()
        updateTotalFee()
         
        
    
    
    });
    
    plus3.addEventListener('click', function(){
        let currentValue = +(input3.value)
        let maxValue = +(input3.getAttribute('max'))
        if(currentValue < maxValue){
            input3.value = currentValue + 1
    
        }

        //手機版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"小計"

        updatePreTotalRwd()
        updateTotalFee()
        
        
    });


    
    
    
    minus5.addEventListener('click', function(){
        let currentValue = +(input5.value)
        let minValue = +(input5.getAttribute('min'))
        if(currentValue > minValue){
            input5.value = currentValue - 1
    
        }

        //手機版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"小計"
       
        updatePreTotalRwd()
        updateTotalFee()
        
    
    
    });
    
    plus5.addEventListener('click', function(){
        let currentValue = +(input5.value)
        let maxValue = +(input5.getAttribute('max'))
        if(currentValue < maxValue){
            input5.value = currentValue + 1
    
        }
      
        //手機版點擊'+' '-'按鍵，商品購買的數量input增加或減少之後金額自動計算至"小計"
        
        updatePreTotalRwd()
        updateTotalFee()
        
    });

    
    


});