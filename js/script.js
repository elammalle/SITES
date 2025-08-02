document.querySelectorAll('.page-section').forEach(section => {
    section.addEventListener('click', () => {
        document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
        section.classList.add('active');
    });
});
