var search = document.querySelector('.search-bar');
var input = document.querySelector('.div-input');

search.addEventListener('click', () => {
    input.style.display = 'flex';
})

function closeInputSearch() {
    input.style.display = 'none';
}