'use strict';
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

const className = document.body.className;
if(className == "light-theme") {
    this.textContent = "Switch to Dark Mode";
} else {
    this.textContent = "Switch to Light Mode";
}
console.log('current class name: ' + className);
});