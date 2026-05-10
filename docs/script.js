const cards = document.querySelectorAll('.gallery-card, .api-card, .node');

window.addEventListener('DOMContentLoaded', () => {
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 150 * index);
  });
});
