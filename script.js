const topbar = document.getElementById("topbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight - 100) {
    topbar.style.top = "0";
  } else {
    topbar.style.top = "-120px";
  }
});