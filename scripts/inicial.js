const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;

// Função para atualizar a posição da imagem
function showImage(index) {
  const track = document.querySelector('.slider-track');
  const screenWidth = window.innerWidth; // Pegar a largura da tela
  const offset = -screenWidth * index;
  track.style.transform = `translateX(${offset}px)`; // Mover as imagens
}

// Variáveis para armazenar as coordenadas de toque
let startX = 0;
let endX = 0;
let isSwiping = false; // Verificar se o usuário está deslizando

// Adicionando os eventos de toque ao contêiner
const slider = document.getElementById('image-slider');

// Detectar quando o toque começa
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX; // Pegar o ponto inicial do toque
  isSwiping = true;
});

// Detectar o movimento do toque
slider.addEventListener('touchmove', (e) => {
  if (!isSwiping) return; // Se não estiver deslizando, não faça nada
  endX = e.touches[0].clientX; // Atualizar a posição do toque
});

// Detectar quando o toque termina
slider.addEventListener('touchend', () => {
  if (!isSwiping) return;
  isSwiping = false; // Resetar o estado de deslize

  // Verificar se houve um movimento significativo para a esquerda ou direita
  if (startX > endX + 50) {
    // Deslizou para a esquerda (próxima imagem)
    currentIndex = (currentIndex + 1) % images.length;
  } else if (startX < endX - 50) {
    // Deslizou para a direita (imagem anterior)
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  // Mostrar a imagem atualizada
  showImage(currentIndex);
});

// Mostrar a primeira imagem ao carregar a página
showImage(currentIndex);

// Recalcular a posição das imagens quando a tela for redimensionada
window.addEventListener('resize', () => {
  showImage(currentIndex);
});
