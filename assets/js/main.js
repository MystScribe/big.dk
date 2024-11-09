const images = document.querySelectorAll('.p-mainimg');

images.forEach(image => {
    image.addEventListener('click', function() {
        if (image.classList.contains('clicked')) return;
        image.classList.add('clicked');


        const targetContainer = image.closest('.p');

        const hiddenElements = targetContainer.querySelectorAll('#p-i-hide');
        const imgElement = targetContainer.querySelectorAll('.p-mainimg');
        

        hiddenElements.forEach(element => element.classList.add('active'));
        imgElement.forEach(element => element.classList.add('active'));
    });
});


const carousel = document.querySelector('.carousel');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

const scrollAmount = 300;


scrollLeftButton.addEventListener('click', () => {
    carousel.scrollLeft -= scrollAmount;
});


scrollRightButton.addEventListener('click', () => {
    carousel.scrollLeft += scrollAmount;
});
