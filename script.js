const page = document.querySelector(".page");
const cards = page.querySelectorAll(".app-description, .app-promo__images");
const dotsSection = page.querySelectorAll(".scroll__dots");

for (const card of cards) {
  const numberDots = Array(card.children.length).fill(
    '<div class="scroll_dot"></div>',
    1
  );

  numberDots[0] = '<div class="scroll_dot scroll_dot_active"></div>';

  numberDots.forEach((dot) =>
    card.nextElementSibling.insertAdjacentHTML("beforeend", dot)
  );
}

function scrollHandler(event) {
  const numberCards = event.target.children.length;
  const { scrollWidth, scrollLeft } = event.target;
  const activeCard = Math.round(scrollLeft / (scrollWidth / numberCards));
  const dots = event.target.nextElementSibling.querySelectorAll(".scroll_dot");

  dots.forEach((dot, index) => {
    dot.classList.toggle("scroll_dot_active", index === activeCard);
  });
}

cards.forEach((card) => {
  card.addEventListener("scroll", scrollHandler);
});
