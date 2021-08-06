
// function to open and close nav
let nav_open = false;
function toggleNav() {
    const mobilemenu = document.getElementById("mobilemenu")
    const topbar = document.getElementById("header")
    if (!nav_open) {
        mobilemenu.style.height = "224px";
        mobilemenu.style.display = "block"
        // topbar.style.marginBottom = "224px";
        nav_open = true;
    }
    else {
        mobilemenu.style.height = "0";
        mobilemenu.style.display = "none"
        // topbar.style.marginBottom = "0";
        nav_open = false;
    }
}
document.getElementById('menu_open_btn').addEventListener('click', toggleNav);
