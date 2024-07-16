// document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.getElementById('hamburger');
//     const sideMenu = document.getElementById('side-menu');
//     const menuOverlay = document.getElementById('menu-overlay');
  
//     hamburger.addEventListener('click', function () {
//       sideMenu.classList.toggle('show');
//       menuOverlay.classList.toggle('show');
//     });
  
//     menuOverlay.addEventListener('click', function () {
//       sideMenu.classList.remove('show');
//       menuOverlay.classList.remove('show');
//     });
  
//     const sideNavLinks = document.querySelectorAll('#side-menu a');
//     sideNavLinks.forEach(link => {
//       link.addEventListener('click', function () {
//         sideMenu.classList.remove('show');
//         menuOverlay.classList.remove('show');
//       });
//     });
//   });

//第二個版本
//   document.addEventListener('DOMContentLoaded', function () {
//     const hamburger = document.getElementById('hamburger');
//     const sideMenu = document.getElementById('side-menu');
//     const menuOverlay = document.getElementById('menu-overlay');

//     hamburger.addEventListener('click', function () {
//         if (!sideMenu.classList.contains('show')) {
//             sideMenu.style.display = 'block'; // 顯示側邊菜單，然後應用過渡效果
//             setTimeout(() => {
//                 sideMenu.classList.add('show');
//                 menuOverlay.classList.add('show');
//             }, 10); // 使用 setTimeout 避免立即觸發過渡效果
//         }
//     });

//     menuOverlay.addEventListener('click', function () {
//         sideMenu.classList.remove('show');
//         menuOverlay.classList.remove('show');
//         setTimeout(() => {
//             sideMenu.style.display = 'none'; // 隱藏側邊菜單
//         }, 300); // 在過渡效果完成後隱藏
//     });
// });

//第三個版本
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    let isMenuOpen = false; // 追踪菜單是否已經打開

    hamburger.addEventListener('click', function () {
        if (!isMenuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    menuOverlay.addEventListener('click', function () {
        closeMenu();
    });

    function openMenu() {
        sideMenu.style.display = 'block'; // 確保菜單可見
        setTimeout(() => {
            sideMenu.classList.add('show');
            menuOverlay.classList.add('show');
        }, 10); // 使用 setTimeout 避免立即觸發過渡效果
        isMenuOpen = true;
    }

    function closeMenu() {
        sideMenu.classList.remove('show');
        menuOverlay.classList.remove('show');
        setTimeout(() => {
            sideMenu.style.display = 'none'; // 過渡效果完成後再隱藏菜單
        }, 300); // 等待過渡效果完成後再隱藏菜單
        isMenuOpen = false;
    }

    // 監聽視窗大小變化
    window.matchMedia('(min-width: 931px)').addListener((event) => {
        if (event.matches) {
            // 螢幕寬度大於 930px，關閉菜單
            closeMenu();
        }
    });

});