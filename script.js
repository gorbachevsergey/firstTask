let button = document.getElementById('buttImageMove')
let elem = document.getElementById('img')

button.addEventListener('click', function () {
    if(elem.classList.contains('imgOld')) {
        elem.classList.remove('imgOld');
        elem.classList.add('imgNewMove');
    } else {
        elem.classList.remove('imgNewMove');
        elem.classList.add('imgOld');
    }
})

