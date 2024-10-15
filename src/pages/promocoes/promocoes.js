const carousels = [...document.querySelectorAll('.carousel')];

carousels.forEach((carousel) => {
  const productContainer = carousel.querySelector('.carousel-container');
  const cards = productContainer.querySelectorAll('.card');
  const preBtn = carousel.querySelector('.pre-btn');
  const nxtBtn = carousel.querySelector('.nxt-btn');
  const indicators = carousel.querySelector('.carousel-indicators');

  function createIndicators() {

    if (!indicators) return;
    indicators.innerHTML = '';

    cards.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('carousel-indicator');
      indicator.dataset.index = index;
      indicators.appendChild(indicator);
    });

    updateIndicators();
  }

  function updateIndicators() {
    if (!indicators) return;

    const allIndicators = indicators.querySelectorAll('.carousel-indicator');
    allIndicators.forEach(indicator => indicator.classList.remove('active-indicator'));

    const cardWidth = productContainer.querySelector('.card').offsetWidth;
    const scrollLeft = productContainer.scrollLeft;
    const visibleCardIndex = Math.round(scrollLeft / cardWidth);
    allIndicators[visibleCardIndex].classList.add('active-indicator');
  }

  nxtBtn.addEventListener('click', () => {
      const cardWidth = productContainer.querySelector('.card').offsetWidth;
      productContainer.scrollLeft += cardWidth;
      updateIndicators();
  });

  preBtn.addEventListener('click', () => {
      const cardWidth = productContainer.querySelector('.card').offsetWidth;
      productContainer.scrollLeft -= cardWidth;
      updateIndicators();
  });

  productContainer.addEventListener('scroll', () => {
      updateIndicators();
  });

  createIndicators();
});

