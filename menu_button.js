
// function to open and close nav
const mobilemenu = document.getElementById("mobilemenu")

function toggleNav() {
    mobilemenu.classList.toggle('open_nav')
    mobilemenu.classList.toggle('close_nav')
}
document.getElementById('menu_open_btn').addEventListener('click', toggleNav);
