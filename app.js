var nav = document.getElementById('site-menu');
var header = document.getElementById('top');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 400) { // adjust this value based on site structure and header image height
        nav.classList.add('nav-sticky');
        header.classList.add('pt-scroll');
    } else {
        nav.classList.remove('nav-sticky');
        header.classList.remove('pt-scroll');
    }
});

function navToggle() {
    var btn = document.getElementById('menuBtn');
    var nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}


// Toggle Dark Functionality
let flag = true;
const toggler = document.querySelector('.toggler');
// Toggle Dark Function
const toggleDark = () => {
    toggler.addEventListener('click', () => {
        const html = document.documentElement;
        toggler.children[0].classList.toggle('translate-x-10');
        if (flag) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        flag = !flag;
    });
};
toggleDark();