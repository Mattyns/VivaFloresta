const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

// Função para mostrar a imagem atual
function showImage(index) {
  const track = document.querySelector('.slider-track');
  const totalImages = images.length;

  // Calcular a porcentagem para deslizar
  const percentage = -(110 / totalImages) * index;
  track.style.transform = `translateX(${percentage}%)`;

  // Adicionar a classe "active" à imagem atual e remover das outras
  images.forEach((img, i) => {
    if (i === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

// Variáveis para armazenar as coordenadas de toque
let startX = 0;
let endX = 0;

// Adicionando os eventos de toque ao contêiner
const slider = document.getElementById('image-slider');

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  // Determina se o usuário deslizou para a direita ou esquerda
  if (startX > endX + 50) {
    // Deslizou para a esquerda (próxima imagem)
    currentIndex = (currentIndex + 1) % images.length;
  } else if (startX < endX - 50) {
    // Deslizou para a direita (imagem anterior)
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  showImage(currentIndex);
});

// Mostrar a primeira imagem ao carregar a página
showImage(currentIndex);