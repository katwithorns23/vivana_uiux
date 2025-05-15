document.addEventListener('DOMContentLoaded', function() {
    const dropBtn = document.querySelector('.dropbtn');
    const dropContent = document.getElementById('categoryDropdown');
    
    // Toggle dropdown on button click
    dropBtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropContent.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            if (dropContent.classList.contains('show')) {
                dropContent.classList.remove('show');
            }
        }
    });
});
