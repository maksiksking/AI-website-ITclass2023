document.addEventListener("DOMContentLoaded", function() {
  var currentImageIndex = 0;
  var images = [
    "image/images.png",
    "image/images1.jpg",
    "image/images2.png"
    // Add more image paths as needed
  ];
  var currentImage = document.getElementById("current-image");
  var prevButton = document.getElementById("prev-button");
  var nextButton = document.getElementById("next-button");

  // Function to update the current image
  function updateCurrentImage() {
    currentImage.src = images[currentImageIndex];
  }

  // Function to handle the previous button click
  function prevButtonClick() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateCurrentImage();
  }

  // Function to handle the next button click
  function nextButtonClick() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateCurrentImage();
  }

  // Add event listeners to the buttons
  prevButton.addEventListener("click", prevButtonClick);
  nextButton.addEventListener("click", nextButtonClick);

  // Set initial image
  updateCurrentImage();
});
