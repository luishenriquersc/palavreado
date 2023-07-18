
const palavras = ["CARAI", "BUNDA", "FODAS", "FUDEU", "MERDA", "PORRA", "LERDO", "BURRO", "CUZAO", "BOBAO", "FODAO", "PUTOS", "TEUCU", "CHUPA", "CORNO", "CAGAO", "TOSCO"];

const indiceAleatorio = Math.floor(Math.random() * palavras.length);
const palavraCerta = palavras[indiceAleatorio];


 
      function compararValores() {
        const inputs = document.querySelectorAll("input[type='text']"); // Seleciona todos os inputs de texto
        const valores = []; // Array para armazenar os valores coletados
    
      
        for (let i = 0; i < inputs.length; i++) {
          const valor = inputs[i].value; // Captura o valor do input atual
          valores.push(valor.toLowerCase()); // Adiciona o valor ao array convertido para minúsculas
        }
      
          for (let i = 0; i < valores.length; i++) { // Itera por toda a array "valores"
          const valorAtual = valores[i]; // Cria uma variável para a letra que vai ser comparada
          const letraCorrespondente = palavraCerta[i].toLowerCase(); 
          /* Cria uma variável para a letra da palavra certa com a qual a letra atual vai ser comparada. No bloco de códigos 
          anterior, o valor digitado pelo usuário foi convertido em minúsculas. Aqui, a palavra certa também é convertida em minúsculas */

          const inputAtual = inputs[i]; // Acessa o elemento de input correspondente a partir da variável anterior que seleciona todos os inputs de texto
      
          if (valorAtual === letraCorrespondente) {
            inputAtual.className = 'letra_certa';
          } else 
            inputAtual.className = 'letra_errada';
          

          let todosTiveramClasse = true;

          inputs.forEach((input) => {
            if (!input.classList.contains("letra_certa")) {
              todosTiveramClasse = false;
              return; // Sai do loop se encontrar um input sem a classe
            }
          });
          
          if (todosTiveramClasse) {
            const mensagemCerta = document.getElementById("mensagem_certa");
            mensagemCerta.textContent = "Você é f0d@!";
          }

          }
        }
      
        function desistir() {
          const mensagemCerta = document.getElementById("mensagem_desistir");
          mensagemCerta.textContent = palavraCerta;
        }
      
      