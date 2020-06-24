const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const close = document.querySelector(".close-modal");

for (let card of cards) {
  card.addEventListener("click", function () {
    const videoid = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${videoid}`;
  });
}

close.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
});

const iframe = modalOverlay.querySelector("iframe");
