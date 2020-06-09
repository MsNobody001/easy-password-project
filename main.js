const input = document.querySelector('input');
const passwords = ['user', 'wiosna', 'super'];
const messages = ['Wyjeżdżam na zawsze', 'Piękna pora roku', 'wszystko działa pięknie'];
const div = document.querySelector('div');

input.addEventListener('input', (e) => {
    div.textContent = '';
    passwords.forEach((password, index) => {
        if (e.target.value == password) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })
})

input.addEventListener('focus', () => {
    input.classList.add('active');
})

input.addEventListener('blur', () => {
    input.classList.remove('active');
})

// if (e.target.value == password) {
//     div.textContent = message;
//     e.target.value = "";
// } else {
//     div.textContent = '';
// }