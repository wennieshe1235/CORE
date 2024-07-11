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