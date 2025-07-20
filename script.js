document.getElementById('card').addEventListener('click', function () {
  const card = document.getElementById('card');
  const heart = document.getElementById('heart');
  card.style.opacity = '0';
  setTimeout(() => {
    card.style.display = 'none';
    heart.style.display = 'block';
  }, 500);
});
