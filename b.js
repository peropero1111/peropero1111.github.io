 Document.addEventListener('DOMContentLoaded', function () {
    let sequence = ['a', 'r', 'i', 's', 'u', 'c', 'h', 'a', 'n'];
    let currentIndex = 0;

    Document.addEventListener('keydown', function (event) {
        if (event.key.toLowerCase() === sequence[currentIndex]) {
            currentIndex++;
            if (currentIndex === sequence.length) {
                Document.getElementById('hiddenImage').style.display = 'block';
            }
        } else {
            currentIndex = 0;
        }
    });
});
