function toggleMenu(menuId) {
    // Get all elements with class 'dosMenu' and hide them
    var menus = document.querySelectorAll('.dosMenu');
    menus.forEach(menu => {
        if (menu.id !== menuId) {
            menu.style.display = 'none';
        }
    });

    // Toggle the specified menu
    var menu = document.getElementById(menuId);
    if (menu.style.display === 'none' || !menu.style.display) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function openLink(url) {
    window.open(url, '_blank');
}
