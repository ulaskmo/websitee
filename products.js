var productImage = document.getElementById('product2');
var images = [
    'images/gini-london-black-polka-dot-mini-wrap-dress.jpg',
    'images/productt2.jpg', // Replace with the actual file names and extensions
    // Add more image paths as needed
];
    var currentImageIndex = 0;

    function changeImage() {
        // Update the src attribute with the next image URL
        productImage.src = images[currentImageIndex];

        // Increment the index or reset to 0 if it exceeds the array length
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change the image every 2 seconds
    setInterval(changeImage, 2000);