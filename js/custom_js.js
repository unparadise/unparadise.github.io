$(document).ready(function () {
  $(".dropdown").hover(function () {
    var dropdownMenu = $(this).children(".dropdown-menu");
    if (dropdownMenu.is(":visible")) {
      dropdownMenu.parent().toggleClass("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Add modal attributes to all images with 'design' class
  document.querySelectorAll("img.design").forEach(function (img) {
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#imageModal");
    img.style.cursor = "pointer";
  });

  // Handle modal image update
  var imageModal = document.getElementById("imageModal");
  imageModal.addEventListener("show.bs.modal", function (event) {
    var clickedImage = event.relatedTarget;
    var imgSrc = clickedImage.getAttribute("src");

    // Update modal image
    var modalImage = document.getElementById("modalImage");
    modalImage.setAttribute("src", imgSrc);

    // Update modal title (optional)
    var figureCaption = clickedImage.nextElementSibling?.innerText || "";
    document.getElementById("imageModalLabel").innerText = figureCaption;
  });
});
