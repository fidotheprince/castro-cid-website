//on scroll execute function 

window.onscroll = function() {stickMenu()};

var menuContainer = document.getElementById("menu-container");
var offSetMenu = menuContainer.offsetTop;

function stickMenu() {
   
    if (window.pageYOffset >= offSetMenu) {
        menuContainer.classList.add("sticky");
    } else {
        menuContainer.classList.remove("sticky");
    }
}