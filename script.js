var buttons = document.querySelectorAll('.button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // Prevent default link behavior
        e.preventDefault();

        // Toggle answer visibility
        var id = this.getAttribute('href').split('#')[1];
        var answer = document.getElementById('answer' + id);
        answer.classList.toggle('hidden');
        answer.classList.toggle('visible');

        // Toggle plus/minus icon
        var plusIcon = this.querySelector('.icon-plus');
        var minusIcon = this.querySelector('.icon-minus');
        plusIcon.classList.toggle('hidden');
        plusIcon.classList.toggle('visible');
        minusIcon.classList.toggle('hidden');
        minusIcon.classList.toggle('visible');
    });
});
