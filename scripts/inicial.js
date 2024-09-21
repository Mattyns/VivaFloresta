const images = document.querySelectorAll('.slider-image');
let currentIndex = 1; // Iniciar na primeira imagem (índice 0)

// Ajustar a largura do slider-track com base no número de imagens
const track = document.querySelector('.slider-track');
track.style.width = `${images.length * 100}vw`; // Largura total: número de imagens vezes 100vw

// Função para atualizar a posição da imagem
function showImage(index) {
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
  startX = e.touches[0].client
