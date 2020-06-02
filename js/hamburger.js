window.addEventListener('DOMContentLoaded', () => {
    const navigation = document.querySelector('.navigation'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        navigation.classList.toggle('navigation-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            navigation.classList.toggle('navigation-active');
        })
    })
})