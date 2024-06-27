// Menu-Sandwitch
document.querySelector('.menu-sandwich').addEventListener('click', function() {
    var links = document.querySelector('.menu__list');
    if (links.style.display === 'none') {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
});

// document.getElementById('menuToggle').addEventListener('click', function() {
//     var menuList = document.getElementById('menuList');
//     menuList.classList.toggle('show');
// });

