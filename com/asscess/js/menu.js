
var image = document.getElementById("image");
  var initialTransform = getComputedStyle(image).transform;

  image.addEventListener("animationiteration", function() {
    // Đặt lại giá trị transform khi hoàn thành chu kỳ animation
    image.style.transform = initialTransform;
  });

 
 