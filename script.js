document.addEventListener('DOMContentLoaded', function() {
    const imageBoxes = document.querySelectorAll('.image-box');

    imageBoxes.forEach(box => {
        const gifSrc = box.getAttribute('data-gif');
        const img = document.createElement('img');
        img.src = gifSrc;
        box.appendChild(img);
    });
});
