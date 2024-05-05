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

document.addEventListener('DOMContentLoaded', function() {
    // Main category toggle, like About and Press, which doesn't require stopping propagation
    var menuItems = document.querySelectorAll('.menu-item:not(.city-menu-item)');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var subMenu = this.querySelector('.sub-menu');
            if (subMenu) {
                subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // City category toggle under Artists
    var cityMenuItems = document.querySelectorAll('.city-menu-item');
    cityMenuItems.forEach(function(city) {
        city.children[0].addEventListener('click', function(event) {
            event.stopPropagation(); // Stop the event from bubbling up to parent elements
            var artistList = city.querySelector('.artist-list');
            if (artistList) {
                artistList.style.display = artistList.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // Prevent any link inside sub-menus from toggling the menu
    var links = document.querySelectorAll('.artist-list a, .sub-menu a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.stopPropagation(); // Stop the link from triggering the menu toggle
        });
    });
});
