'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    if (currentTheme === 'light') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        this.textContent = "Switch to Light Mode";
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-them');
        this.textContent = "Switch to Dark Mode";
    }
    console.log('current class name: ' + document.body.className);
});
