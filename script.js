document.addEventListener("DOMContentLoaded", function () {
  const clickElement = document.getElementById("click");

  clickElement.addEventListener("click", toggleLinks);
});

function toggleLinks() {
  const linksElement = document.getElementById("myLinks");
  linksElement.style.display = (linksElement.style.display === "block") ? "none" : "block";
}
