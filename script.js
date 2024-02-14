    document.addEventListener('DOMContentLoaded', function () {
    // Get modal and buttons
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');


    const registerModal = document.getElementById('registerModal');
    const openRegisterModalBtn = document.getElementById('openRegisterModalBtn');
    const closeRegisterModalBtn = document.getElementById('closeRegisterModalBtn');





    // Open the modal
    openModalBtn.onclick = function () {
        modal.style.display = 'block';
    };

    // Close the modal
    closeModalBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Open the register modal
    openRegisterModalBtn.onclick = function () {
        registerModal.style.display = 'block';
        modal.style.display = 'none';
    };

    // Close the register modal
    closeRegisterModalBtn.onclick = function () {
        registerModal.style.display = 'none';
    };

    // Close the modals if the user clicks outside of them
    window.onclick = function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    };

});

// document.addEventListener('DOMContentLoaded', function (){
//     var nav = document.getElementById('nav');
//     var check = document.getElementById('check')

    
// });
