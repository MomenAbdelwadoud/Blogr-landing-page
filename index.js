const hamBtn = document.getElementById("ham");
const crossBtn = document.getElementById("cross");
const mobileMenu = document.getElementById("menu");

// Add eventListener:
// Click Hamburger button to open menu
hamBtn.addEventListener("click", (e) => {
  //   mobileMenu.classList.add("flex");
  mobileMenu.classList.remove("hidden");
  hamBtn.classList.add("hidden");
  crossBtn.classList.remove("hidden");
});

// Click cross button to hide menu
crossBtn.addEventListener("click", (e) => {
  mobileMenu.classList.add("hidden");
  //   mobileMenu.classList.remove("flex");
  hamBtn.classList.remove("hidden");
  crossBtn.classList.add("hidden");
});
