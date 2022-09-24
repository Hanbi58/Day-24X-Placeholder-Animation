const image = document.querySelector(".image");
const text = document.querySelector(".text");
const overlay = document.querySelector(".overlay");

overlay.classList.add("hidden");
setTimeout(() => {
  removeLoading();
}, 2000);

function removeLoading() {
  image.classList.remove("loadingImage");
  text.classList.remove("loadingText");
  overlay.classList.remove("hidden");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 500);
}
