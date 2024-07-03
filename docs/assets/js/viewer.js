//open modal when image is clicked
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('viewer');
        const modalImg = document.getElementById('viewer-img');
        const captionText = document.getElementById('viewer-caption');
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    });
});


//ignore clicks within image
const modalImg = document.getElementById('viewer-img');
modalImg.onclick = function(event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
}
//close modal if clicked outside image
const modal = document.getElementById('viewer');
modal.onclick = function() {
    const modal = document.getElementById('viewer');
    modal.style.display = 'none';
}

//close modal if esc key pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('viewer');
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    }
});

