
const fullname = document.getElementById('fullname');
const corporation = document.getElementById('corporation');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
    cleanErrors()
    if (fullname.value === '' ) {
        e.preventDefault();
        createError("test", fullname)
    }

    let lastDot = email.value.lastIndexOf(".")
    let lastAtSymbol = email.value.lastIndexOf("@")

    if (lastDot === -1 || lastAtSymbol === -1) {
        e.preventDefault();
        createError("test", email)
    }
    // betydning = hvis ovenstående if ikke har fejl, så kør de andre if statements
    else if (!(lastDot < email.value.length-1)) {
        e.preventDefault();
        createError("test", email)
    }
    // betydning = @ skal være mindst 1 væk fra punktum
    else if (!(lastAtSymbol < lastDot-1)) {
        e.preventDefault();
        createError("test", email)
    }

    // ^ fra start, \d digit, + uendeligt mange gange, $ til slut
    // let reg = /^\d+$/ 
    // if (!reg.test(phone.value)) {
    //     e.preventDefault();
    //     createError("test", phone)
    // }

    // else if (phone.value.length != 8) {
    //     e.preventDefault();
    //     createError("test", phone)
    // }

})

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const product = urlParams.get("submit")
console.log(submit);


function cleanErrors(){

    // array = samling af ting (felter)
    let elementList = [fullname, corporation, email, phone]

         // ++ betyder: index = index +1
         // Her begynder loop = går hen over tingene og fjerner border en efter en
    for (let index = 0; index < elementList.length; index++) {
        const element = elementList[index];

        // Fjerne inline stylingen borderColor red
        element.style.removeProperty('border-color');
        // element.style.removeAttribute('border-color'); hvis der bruges en browser ældre end explore9
    }
}

function createError(message, element){
    element.style.borderColor = "red";
}