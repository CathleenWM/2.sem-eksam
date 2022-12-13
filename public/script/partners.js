// find the partners container div
const partners = document.getElementById("partners")

// use array-like object to fetch the partners list inside of partners
const partnersList = partners.children[0]

// clone the contents of the partners list
const clone = partnersList.innerHTML

// get current scrollwidth for comparisson later
const partnersListWidth = partnersList.scrollWidth

// append the cloned contents of partners list into itself
const insertClone = () => {
    partnersList.insertAdjacentHTML('beforeend', clone)
}

// sleep function with default duration of 1 second
const sleep = (duration = 1000) => {
    // return a promise that does nothing but delay itself
    return new Promise(resolve => setTimeout(resolve, duration))
}

let isHovering = false

partners.addEventListener('mouseenter', () => isHovering = true)
partners.addEventListener('mouseleave', () => {
    isHovering = false
    animatePartners()
})

// definite the current iteration and initial margin of the animation
let iteration = 1
let currentMargin = 0

// insert a close to ensure that no blank space is shown when the list moves
insertClone()

// encapsulate the animation
const animatePartners = async () => {
    // loop until mouse is hovering
    while (!isHovering) {
        // increment current margin
        currentMargin++
        // move partners list to the left by negative value of margin
        partnersList.style.marginLeft = '-' + currentMargin + 'px'

        // cheeck if current margin matches the list width (times the iteration, otherwise it continues to be true forever)
        if (currentMargin > partnersListWidth * iteration) {
            // insert another clone to prevent whitespace showing
            insertClone()

            // increase iteration to prevent continuous validation of this statement as being true
            iteration++
        }

        // await an empty promise to force the loop to delay itself
        await sleep(10)
    }
}

// begin the animation
animatePartners()