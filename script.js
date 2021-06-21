let button = document.getElementById('buttImageMove')
let elem = document.getElementById('img')

button.addEventListener('click', function () {
    elem.classList.remove('imgOld');
    elem.classList.add('imgNewMove');
    elem.style.transition='all 2s ease-in-out';
})