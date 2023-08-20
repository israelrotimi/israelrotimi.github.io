//Toggle menu for mobile screen
const navbar = document.getElementsByClassName('nav-mobile');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    console.log('display was set to: ' + menu.style.display);
    if(menu.style.display === 'none' || menu.style.display === ''){
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
    console.log('display is set to: ' + menu.style.display);
}
//add chevron icon to dropdown trigger
//<i class="bi-chevron-right"></i>
