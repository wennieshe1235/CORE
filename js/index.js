// 模擬商品數據
const products = [
    { id: 1, name: "商品1", price: 1200, img: "./img/index-item1-removebg-preview.png" },
    { id: 2, name: "商品2", price: 2500, img: "./img/index-item2-removebg-preview.png" },
    { id: 3, name: "商品3", price: 3500, img: "./img/index-item3-removebg-preview.png" },
    { id: 4, name: "商品4", price: 4500, img: "./img/index-item4-removebg-preview.png" },
    { id: 5, name: "商品5", price: 5600, img: "./img/index-item5-removebg-preview.png" },
    { id: 6, name: "商品6", price: 7800, img: "./img/index-item6-removebg-preview.png" },
    { id: 7, name: "商品7", price: 8500, img: "./img/index-item1-removebg-preview.png" },
    { id: 8, name: "商品8", price: 9200, img: "./img/index-item2-removebg-preview.png" }
];

function recommendProducts() {
    const budget = parseInt(document.getElementById("budget").value);
    const recommendedItems = document.getElementById("recommended-items");

    // 選擇小於或等於預算的商品
    const filteredProducts = products.filter(product => product.price <= budget);

    // 清空推薦商品區域
    recommendedItems.innerHTML = "";

    // 顯示過濾後的商品
    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("recommended-item");

        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}" />
            <p>${product.name}</p>
            <p>價格: ${product.price}</p>
        `;

        recommendedItems.appendChild(productElement);
    });

    // 如果沒有找到符合條件的商品，顯示提示信息
    if (filteredProducts.length === 0) {
        recommendedItems.innerHTML = "<p>沒有找到符合條件的商品。</p>";
    }
}