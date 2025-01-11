document.addEventListener('DOMContentLoaded', function () {
    let sequence = ['a', 'r', 'i', 's', 'u', 'c', 'h', 'a', 'n'];
    let currentIndex = 0;

    document.addEventListener('keydown', function (event) {
        if (event.key.toLowerCase() === sequence[currentIndex]) {
            currentIndex++;
            if (currentIndex === sequence.length) {
                document.getElementById('hiddenImage').style.display = 'block';
                currentIndex = 0; // Reset after displaying the image
            }
        } else {
            currentIndex = 0; // Reset if the sequence breaks
        }
    });
});

