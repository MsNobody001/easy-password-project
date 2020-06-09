const input = document.querySelector('input');
const password = 'user';
const message = 'Wyjeżdżam na zawsze';
const div = document.querySelector('div');

input.addEventListener('input', (e) => {
    if (e.target.value == password) {
        div.textContent = message;
        e.target.value = "";
    } else {
        div.textContent = '';
    }
})

input.addEventListener('focus', () => {
    input.classList.add('active');
})

input.addEventListener('blur', () => {
    input.classList.remove('active');
})