const allMenuItems = document.querySelectorAll(".desktop_menu_item");

for (item of allMenuItems) {
    if (item.href == window.location.href) {
        item.classList.add('nav_active');
    }
}