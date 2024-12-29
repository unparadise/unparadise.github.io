$(document).ready(function () {
  $(".dropdown").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let currentImageIndex = 0;
  const images = document.querySelectorAll("img.design");

  // Add modal attributes to all images with 'design' class
  images.forEach(function (img, index) {
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#imageModal");
    img.setAttribute("data-index", index);
    img.style.cursor = "pointer";
  });

  // Handle modal image update
  const imageModal = document.getElementById("imageModal");
  imageModal.addEventListener("show.bs.modal", function (event) {
    const clickedImage = event.relatedTarget;
    currentImageIndex = parseInt(clickedImage.getAttribute("data-index"));
    updateModalImage();
  });

  // Handle navigation buttons
  document.getElementById("prevButton").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModalImage();
  });

  document.getElementById("nextButton").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModalImage();
  });

  // Add keyboard navigation
  document.addEventListener("keydown", function (event) {
    if (imageModal.classList.contains("show")) {
      if (event.key === "ArrowLeft") {
        currentImageIndex =
          (currentImageIndex - 1 + images.length) % images.length;
        updateModalImage();
      } else if (event.key === "ArrowRight") {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateModalImage();
      }
    }
  });

  function updateModalImage() {
    const modalImage = document.getElementById("modalImage");
    const currentImage = images[currentImageIndex];
    modalImage.setAttribute("src", currentImage.getAttribute("src"));

    // Update modal title with the figure caption
    const figureCaption = currentImage.nextElementSibling?.innerText || "";
    document.getElementById("imageModalLabel").innerText = figureCaption;
  }

  // Dropdown hover functionality
  $(".dropdown").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});
