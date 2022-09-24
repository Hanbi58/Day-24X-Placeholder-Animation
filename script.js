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
  text.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ipsum!`;
  overlay.classList.remove("hidden");
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 500);
}
