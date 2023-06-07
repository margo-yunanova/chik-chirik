const page = document.querySelector(".page");
const cards = page.querySelectorAll(".app-description, .app-promo__images");

function scrollHandler(event) {
  const numberCards = event.target.children.length;
  const { scrollWidth, scrollLeft } = event.target;
  const activeCard = Math.round(scrollLeft / (scrollWidth / numberCards));
  const dots = event.target.nextElementSibling.querySelectorAll(".scroll_dot");

  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === activeCard ? "#212121" : "#D9D9D9";
  });
}

cards.forEach((card) => {
  card.addEventListener("scroll", scrollHandler);
});
