document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container-1");
    const images = imageContainer.querySelectorAll("img");
    let currentImageIndex = 0;
  
    // Initially, hide all images except the first one
    images.forEach((image, index) => {
      if (index !== currentImageIndex) {
        image.style.display = "none";
      }
    });
  
    // Add a click event listener to the container
    imageContainer.addEventListener("click", function () {
      // Hide the current image
      images[currentImageIndex].style.display = "none";
  
      // Increment the image index or reset it to 0 if it exceeds the number of images
      currentImageIndex = (currentImageIndex + 1) % images.length;
  
      // Show the new current image
      images[currentImageIndex].style.display = "block";
    });
  });
  