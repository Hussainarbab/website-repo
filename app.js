
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.menu');
    const menuList = document.querySelector('.menu ul');

    menuBtn.addEventListener('click', function() {
        menuList.classList.toggle('show');
    });

    const loginBtn = document.getElementById('loginBtn');
    loginBtn.addEventListener('click', function() {
        // Handle login logic here
        alert('Login button clicked!');
    });
});