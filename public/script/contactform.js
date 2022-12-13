
const fullname = document.getElementById('fullname');
const corporation = document.getElementById('corporation');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    let messages = [];
    if (fullname.value === '' ) {
        messages.push('Navn er påkrævet');
    }
})
