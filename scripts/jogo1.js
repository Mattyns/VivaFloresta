// Seleciona as divs
const plast = document.getElementById('plast');
const rplast = document.getElementById('rplast');
const res = document.getElementById('res');

let clickedDiv1 = false;

// Adiciona um evento de clique à primeira div
plast.addEventListener('click', function() {
  clickedDiv1 = true; // Marca que a primeira div foi clicada
});

// Adiciona um evento de clique à segunda div
rplast.addEventListener('click', function() {
  if (clickedDiv1) { // Verifica se a primeira div já foi clicada
    res.textContent = 'Resultado X mostrado!';
    clickedDiv1 = false; // Reseta para evitar exibição repetida
  } else {
    res.textContent = 'Resultado y mostrado!';
    clickedDiv1 = false;

    

  }
});






//2

// Seleciona as divs
const metal = document.getElementById('plast');
const rmetal = document.getElementById('rplast');
const res = document.getElementById('res');

let clickedDiv2 = false;

// Adiciona um evento de clique à primeira div
metal.addEventListener('click', function() {
  clickedDiv2 = true; // Marca que a primeira div foi clicada
});

// Adiciona um evento de clique à segunda div
rmetal.addEventListener('click', function() {
  if (clickedDiv2) { // Verifica se a primeira div já foi clicada
    res.textContent = 'Resultado X mostrado!';
    clickedDiv2 = false; // Reseta para evitar exibição repetida
  } else {
    res.textContent = 'Resultado y mostrado!';
    clickedDiv2 = false;

    

  }
});
