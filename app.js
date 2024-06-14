const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    // If the light theme is currently applied, switch to dark theme and update button text.
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        this.textContent = "Switch to Light Mode";  // Indicates that the next click will switch to light mode.
    } else {
        // If dark theme is active, switch to light theme and update button text.
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        this.textContent = "Switch to Dark Mode";  // Indicates that the next click will switch to dark mode.
    }

    // Optional: Output the current theme to the console for debugging.
    console.log('Current theme class: ' + document.body.className);
});
