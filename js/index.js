
$(function () {
    let divWidth = $('#sliderBoard').width();
    let imgCount = $('#content li').length;

    // 複製第一張和最後一張圖片
    let firstClone = $('#content li:first').clone();
    let lastClone = $('#content li:last').clone();
    $('#content').append(firstClone);
    $('#content').prepend(lastClone);

    imgCount += 2; // 更新圖片數量以包括複製的圖片

    for(let i = 0; i < imgCount - 2; i++){
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:first').addClass('clicked');

    $('#content li').width(divWidth); // li 的寬度
    $('#content').width(divWidth * imgCount); // ul的寬度
    $('#content').css('left', -divWidth); // 初始位置移動到第一張複製圖片的位置

    let index = 1;
    let timer = setInterval(moveToNext, 5000);

    $('#contentButton li').click(function(){
        clearInterval(timer); // 停掉計時器
        index = $(this).index() + 1; // 更新索引，+1 是因為複製圖片的存在

        $('#content').animate({
            left: divWidth * index * -1,
        });

        $(this).addClass('clicked');
        $('#contentButton li').not(this).removeClass('clicked');

        timer = setInterval(moveToNext, 5000); // 重啟計時器
    });

    function moveToNext() {
        index++;
        $('#content').animate({
            left: divWidth * index * -1,
        }, function() {
            if(index === imgCount - 1) { // 到達最後一張複製圖片
                $('#content').css('left', -divWidth); // 跳轉到第一張圖片
                index = 1;
            }
        });

        let buttonIndex = index - 1;
        if(buttonIndex === imgCount - 2) { // 如果是最後一張複製圖片，顯示第一張的按鈕
            buttonIndex = 0;
        }

        $(`#contentButton li:eq(${buttonIndex})`).addClass('clicked');
        $('#contentButton li').not(`:eq(${buttonIndex})`).removeClass('clicked');
    }
});

// // 模擬商品數據
// const products = [
//     { id: 1, name: "商品1", price: 1200, img: "./img/index-item1-removebg-preview.png" },
//     { id: 2, name: "商品2", price: 2500, img: "./img/index-item2-removebg-preview.png" },
//     { id: 3, name: "商品3", price: 3500, img: "./img/index-item3-removebg-preview.png" },
//     { id: 4, name: "商品4", price: 4500, img: "./img/index-item4-removebg-preview.png" },
//     { id: 5, name: "商品5", price: 5600, img: "./img/index-item5-removebg-preview.png" },
//     { id: 6, name: "商品6", price: 7800, img: "./img/index-item6-removebg-preview.png" },
//     { id: 7, name: "商品7", price: 8500, img: "./img/index-item1-removebg-preview.png" },
//     { id: 8, name: "商品8", price: 9200, img: "./img/index-item2-removebg-preview.png" }
// ];

// function recommendProducts() {
//     const budget = parseInt(document.getElementById("budget").value);
//     const recommendedItems = document.getElementById("recommended-items");

//     // 選擇小於或等於預算的商品
//     const filteredProducts = products.filter(product => product.price <= budget);

//     // 清空推薦商品區域
//     recommendedItems.innerHTML = "";

//     // 顯示過濾後的商品
//     filteredProducts.forEach(product => {
//         const productElement = document.createElement("div");
//         productElement.classList.add("recommended-item");

//         productElement.innerHTML = `
//             <img src="${product.img}" alt="${product.name}" />
//             <p>${product.name}</p>
//             <p>價格: ${product.price}</p>
//         `;

//         recommendedItems.appendChild(productElement);
//     });

//     // 如果沒有找到符合條件的商品，顯示提示信息
//     if (filteredProducts.length === 0) {
//         recommendedItems.innerHTML = "<p>沒有找到符合條件的商品。</p>";
//     }
// }


