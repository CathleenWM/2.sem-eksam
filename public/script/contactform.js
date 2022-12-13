
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

    let lastDot = email.value.lastIndexOf(".")
    let lastAtSymbol = email.value.lastIndexOf("@")

    if (lastDot === -1 || lastAtSymbol === -1) {
        
    }
    // betydning = hvis ovenstående if ikke har fejl, så kør de andre if statements
    else if (lastDot < email.value.length-1) {
        
    }
    // betydning = @ skal være mindst 1 væk fra punktum
    else if (lastAtSymbol < lastDot-1) {
        
    }


})
