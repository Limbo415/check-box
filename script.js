document.querySelectorAll('.items').forEach(item => {
    item.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('clicked');
    });
});
