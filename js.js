document.addEventListener("DOMContentLoaded", function () {
  const background = document.querySelector(".background");

  document.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    // Adjust the values based on your preference for the parallax effect
    const translateX = mouseX * 30;
    const translateY = mouseY * 30;

    background.style.transform = `translate(${translateX}px, ${translateY}px)`;
  });
});
