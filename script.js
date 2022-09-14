const page = document.querySelector('.page');
const cards = page.querySelectorAll('.app-description');
const cardItem = page.querySelectorAll('.app-description__item')
const cardsPromo = page.querySelectorAll('.app-promo__images')

function scrollHandler(event) {
  const offsetLeft1Card = event.target.children[0].children[0].offsetLeft; //0
  const offsetLeft2Card = event.target.children[1].children[0].offsetLeft; //700
  const offsetLeft3Card = event.target.children[2].children[0].offsetLeft; //1400
  const offsetWidthCards = event.target.offsetWidth;
  const leftBorderScreen = event.target.scrollLeft;
  const rightBorderScreen = leftBorderScreen + offsetWidthCards;



  // if (leftBorderScreen < offsetLeft2Card) {
  //   console.log('активна первая карточка');
  // } else if (leftBorderScreen < offsetLeft3Card) {
  //   console.log('активна вторая карточка');
  // } else if (leftBorderScreen < offsetLeft4Card) {
  //   console.log('активна третья карточка');
  // } else if (leftBorderScreen < offsetLeft5Card) {
  //   console.log('активна четвертая карточка');
  // } else {
  //   console.log('активна пятая карточка');
  // }


  for (let i = 1; i < event.target.children.length; i++) {
    if (leftBorderScreen < event.target.children[i].children[0].offsetLeft) {
      console.log(i)
      console.log(leftBorderScreen + ' < ' + event.target.children[i].children[0].offsetLeft)
      //console.log(`active ${i} card`);
    }
    else {
      //console.log('active ' +  event.target.children.length + ' card');
      //console.log(leftBorderScreen + ' - ' + event.target.children[i].children[0].offsetLeft)
      //console.log(event.target.children.length)
      continue
    }

  }

  // if (leftBorderScreen < (offsetWidthCards / 2)) {
  //   console.log('активна первая карточка');
  // } else if (leftBorderScreen < (offsetWidthCards * 1.5)) {
  //   console.log('активна вторая карточка');
  // } else {
  //   console.log('активна третья карточка');
  // }



  // console.log('первый внук offsetLeft ' + event.target.children[0].children[0].offsetLeft)
  // console.log('второй внук offsetLeft ' + event.target.children[1].children[0].offsetLeft)
  // console.log('дед offsetLeft ' + event.target.offsetLeft)
  // console.log('первый внук offsetWidth ' + event.target.children[0].children[0].offsetWidth)
  // console.log('второй внук offsetWidth ' + event.target.children[1].children[0].offsetWidth)
  // console.log('дед offsetWidth ' + event.target.offsetWidth)
  // console.log('дед scrollLeft ' + event.target.scrollLeft)
  // console.log('дед scrollWidth ' + event.target.scrollWidth)

  // console.log('первый внук scrollLeft ' + event.target.children[0].children[0].scrollLeft)
  // console.log('второй внук scrollLeft ' + event.target.children[1].children[0].scrollLeft)
  // console.log('первый внук scrollWidth ' + event.target.children[0].children[0].scrollWidth)
  // console.log('второй внук scrollWidth ' + event.target.children[1].children[0].scrollWidth)




  if (cards[0].scrollLeft >= cards[0].offsetWidth) {
    page.querySelectorAll('.description__dot')[1].style.backgroundColor = "#212121"
    page.querySelectorAll('.description__dot')[0].style.backgroundColor = "#D9D9D9"
  } else {
    page.querySelectorAll('.description__dot')[1].style.backgroundColor = "#D9D9D9"
    page.querySelectorAll('.description__dot')[0].style.backgroundColor = "#212121"
  }
}

cards.forEach(block => {
  block.addEventListener("scroll", scrollHandler)
});

cardsPromo.forEach(block => {
  block.addEventListener("scroll", scrollHandler)
});


