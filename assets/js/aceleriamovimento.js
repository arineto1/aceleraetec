const imagemPrincipal = document.getElementById('aceleria')
const body = document.body

// --- Controle de Frequência (Throttling) ---
// Para não criar um elemento a CADA pixel movido (melhora performance)
let podeCriarRastro = true
const intervaloRastro = 30 // Criar um ponto a cada 30ms no máximo

window.addEventListener('mousemove', (event) => {
  const x = event.clientX
  const y = event.clientY

  // --- Mover a Imagem Principal ---
  // Centralizar a imagem no cursor (ajuste se necessário)
  const offsetX = imagemPrincipal.offsetWidth / 2
  const offsetY = imagemPrincipal.offsetHeight / 2
  imagemPrincipal.style.transform = `translate(${x - 80}px, ${
    y - offsetY
  }px)`

  // --- Criar Elemento do Rastro (com controle de frequência) ---
  if (podeCriarRastro) {
    criarElementoRastro(x, y)
    podeCriarRastro = false // Bloqueia a criação temporariamente
    setTimeout(() => {
      podeCriarRastro = true // Libera a criação após o intervalo
    }, intervaloRastro)
  }
})

function criarElementoRastro(x, y) {
  const rastro = document.createElement('div')
  rastro.className = 'rastro' // Aplica a classe CSS que definimos

  // Posiciona o centro do rastro onde o cursor estava
  // Usa o tamanho definido no CSS para calcular o offset
  const tamanhoRastro = 15 // Deve ser igual ao width/height no CSS
  rastro.style.left = `${x - 80}px`
  rastro.style.top = `${y - tamanhoRastro / 2}px`

  // Adiciona o elemento rastro ao corpo do documento
  body.appendChild(rastro)

  // --- Remoção Automática ---
  // Remove o elemento do DOM DEPOIS que a animação CSS terminar
  // O tempo deve ser igual ou ligeiramente maior que a duração da animação (0.6s = 600ms)
  setTimeout(() => {
    // Verifica se o elemento ainda pertence ao body antes de tentar remover
    if (rastro.parentNode === body) {
      body.removeChild(rastro)
    }
  }, 800) // Tempo em milissegundos
}

// Opcional: Esconder a imagem principal inicialmente até o primeiro movimento
// imagemPrincipal.style.opacity = 0;
// window.addEventListener('mousemove', function showImage() {
//    imagemPrincipal.style.opacity = 1;
//    window.removeEventListener('mousemove', showImage);
// }, { once: true });
