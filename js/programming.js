document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const submenu = document.querySelector(".submenu");
    let menuOpen = false;

    menuButton.addEventListener("click", function () {
        if (!menuOpen) {
            submenu.classList.add("open-menu");
            menuButton.classList.add("menu-opened");
            menuButton.innerHTML = "&#x2715;"; // Change to 'X' when open
            menuOpen = true;
        } else {
            submenu.classList.remove("open-menu");
            menuButton.classList.remove("menu-opened");
            menuButton.innerHTML = "&#9776;"; // Change back to menu icon
            menuOpen = false;
        }
    });
});
