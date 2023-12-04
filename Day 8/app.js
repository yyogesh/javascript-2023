document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.querySelector('.close');

    // Event listener to open the modal
    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Event listener to close the modal
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        console.log('event.target', event.target)
        if(event.target === modal) {
            modal.style.display = 'none'
        }
    })
});