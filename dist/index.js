let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");

burger.addEventListener('click', () => {
    menu.classList.toggle("hidden");
    if (burger.classList.contains('fa-bars')) {
        burger.classList.replace('fa-bars', 'fa-xmark');
    }
    else {
        burger.classList.replace('fa-xmark', 'fa-bars');
    }

})