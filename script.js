document.querySelectorAll(".dashboard__menu-item").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.05)";
    item.style.transition = "transform 0.2s";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
  });
});
