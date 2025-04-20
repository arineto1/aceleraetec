// Seleciona a imagem pelo ID
const imagem = document.getElementById('aceleria');

// Adiciona um ouvinte de evento para o movimento do mouse na janela inteira
window.addEventListener('mousemove', (event) => {
    // Obtém as coordenadas X e Y do ponteiro do mouse
    const x = event.clientX;
    const y = event.clientY;

    // Atualiza a posição da imagem usando a propriedade transform
    // Isso move o canto superior esquerdo da imagem para a posição do mouse
    // imagem.style.transform = `translate(${x}px, ${y}px)`;

    
    // --- Alternativa: Centralizar a imagem no cursor ---
    // Se você quiser que o *centro* da imagem siga o mouse,
    // você precisa subtrair metade da largura e altura da imagem.
    // Descomente o código abaixo e comente a linha acima para usar esta alternativa.

    const offsetX = imagem.offsetWidth / 2;
    const offsetY = imagem.offsetHeight / 2;
    imagem.style.transform = `translate(${x - 150}px, ${y - offsetY}px)`;
    
});

