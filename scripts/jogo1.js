let lixoSelecionado = null; // Variável para armazenar o lixo clicado
    let acertos = 0; // Contador de acertos
    const totalLixos = 6; // Total de lixos para reciclar
    const reciclados = new Set(); // Armazena os IDs dos lixos já reciclados

    // Função para atualizar o resultado
    function atualizarResultado() {
      document.getElementById("res").innerText = "Acertos: " + acertos + " de 6";
    }

    // Função para verificar se o jogo foi completado
    function verificarFimDeJogo() {
      if (acertos === totalLixos) {
        document.getElementById("mensagem-final").innerText = "Parabéns! Você reciclou todos os lixos corretamente!";
      }
    }

    // Adiciona evento de clique para cada tipo de lixo
    document.querySelectorAll("#lixo p").forEach(item => {
      item.addEventListener("click", function() {
        if (!reciclados.has(this.id)) { // Verifica se o lixo já foi reciclado
          lixoSelecionado = this.id; // Armazena o id do lixo clicado
          console.log("Lixo selecionado: " + lixoSelecionado);
          item.classList.add("bounce"); // Aplica o efeito bounce ao clicar no lixo
          setTimeout(() => item.classList.remove("bounce"), 500); // Remove a animação após 500ms
        } else {
          alert("Este lixo já foi reciclado!");
        }
      });
    });

    // Adiciona evento de clique para cada lixeira
    document.querySelectorAll("#lixeira div").forEach(item => {
      item.addEventListener("click", function() {
        if (lixoSelecionado && !reciclados.has(lixoSelecionado)) { // Certifica que o lixo ainda não foi reciclado
          // Verifica se o lixo selecionado combina com a lixeira clicada
          if ((lixoSelecionado === "metal" && this.id === "rmetal") ||
              (lixoSelecionado === "plast" && this.id === "rplast") ||
              (lixoSelecionado === "vidro" && this.id === "rvidro") ||
              (lixoSelecionado === "org" && this.id === "rorg") ||
              (lixoSelecionado === "naorec" && this.id === "rnaorec") ||
              (lixoSelecionado === "papel" && this.id === "rpapel")) {
            
            acertos++; // Incrementa os acertos
            reciclados.add(lixoSelecionado); // Marca o lixo como reciclado
            this.classList.add("bounce"); // Aplica o efeito bounce na lixeira ao acertar
            setTimeout(() => this.classList.remove("bounce"), 500); // Remove a animação após 500ms
            atualizarResultado(); // Atualiza o número de acertos
            verificarFimDeJogo(); // Verifica se o jogo terminou
          } else {
            alert("Você errou. Tente novamente!");
          }

          lixoSelecionado = null; // Reseta a seleção de lixo
        } else if (!lixoSelecionado) {
          alert("Selecione um tipo de lixo primeiro!");
        }
      });
    });