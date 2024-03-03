window.addEventListener('load', (event) => {
    const images = document.querySelectorAll('.card-deck img[data-src]');
    let loadedImagesCount = 0;
  
    // Função para pré-carregar as imagens
    function preloadImage(img) {
      const src = img.getAttribute('data-src');
      if (!src) {
        return;
      }
      const tempImg = new Image();
      tempImg.onload = function() {
        loadedImagesCount++;
        if (loadedImagesCount === images.length) {
          showImages();
        }
      };
      tempImg.src = src;
    }
  
    // Função para exibir todas as imagens
    function showImages() {
      images.forEach(img => {
        img.style.display = 'block';
      });
    }
  
    // Pré-carregar todas as imagens
    images.forEach(preloadImage);
  });
  function selectItem(item) {
    // Remove a classe 'selected' de todos os itens
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Adiciona a classe 'selected' ao item selecionado
    item.classList.add('selected');

    // Obtém a posição do item selecionado
    var container = document.getElementById('menu-container');
    var selectedItemPosition = item.offsetLeft;

    // Mantém o item selecionado na mesma posição horizontal após a rolagem
    container.scrollLeft = selectedItemPosition;
}