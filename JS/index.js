function toggleMenu() {
    var menu = document.getElementById('dosMenu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function openLink(url) {
    window.open(url, '_blank');
}