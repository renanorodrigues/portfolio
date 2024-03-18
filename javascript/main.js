document.addEventListener('DOMContentLoaded', function() {
  function createFooterTag() {
    let foot = document.createElement('footer');
    foot.classList.add('footer-apperance');
    let parag = document.createElement('p');
    parag.innerHTML = 'Feito com ❤️ por Renan Rodrigues';
    foot.appendChild(parag);
  }

  createFooterTag()
});