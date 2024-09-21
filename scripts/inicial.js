nst images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

// Função para mostrar a imagem atual
function showImage(index) {
  const track = document.querySelector('.slider-track');
  const totalImages = images.length;
  const screenWidth = slider.clientWidth; // Pegando a largura do contêiner do slider

  // Calcular a quantidade exata de deslocamento para centralizar as imagens
  const offset = -screenWidth * index;
  track.style.transform = `translateX(${offset}px)`;

  // Adicionar/remover a classe "active" nas imagens
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
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
    currentIndex = (currentIndex + 1) % images.length; // Próxima imagem
  } else if (startX < endX - 50) {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Imagem anterior
  }
  showImage(currentIndex);
});

// Mostrar a primeira imagem ao carregar a página;.
showImage(currentIndex);