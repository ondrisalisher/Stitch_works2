function show(){

const showMoreButton = document.querySelector('.show-more');
const hiddenText = document.querySelector('.hidden');

showMoreButton.addEventListener('click', () => {
    hiddenText.classList.toggle('hidden');
    let check = true
    if (hiddenText.classList.contains('hidden')) {
        showMoreButton.textContent = 'Show more';
    } else {
        showMoreButton.textContent = '';
    }
});
}
