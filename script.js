const page = document.querySelector(".page");
const cards = page.querySelectorAll(".app-description");
const cardsPromo = page.querySelectorAll(".app-promo__images");

function scrollHandler(event) {
  const numberCards = event.target.children.length;
  const scrollWidth = event.target.scrollWidth;
  const scrollLeft = event.target.scrollLeft;
  const activeCard = Math.round(scrollLeft / (scrollWidth / numberCards));
  const dots =
    event.target.nextElementSibling.querySelectorAll(".description__dot");

  dots.forEach((dot, index) => {
    if (index === activeCard) {
      dot.style.backgroundColor = "#212121";
    } else {
      dot.style.backgroundColor = "#D9D9D9";
    }
  });
}

cards.forEach((block) => {
  block.addEventListener("scroll", scrollHandler);
});

cardsPromo.forEach((block) => {
  block.addEventListener("scroll", scrollHandler);
});
