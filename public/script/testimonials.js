// TODO: Fade in and out
// TODO: Prevent section from changing height


// find the testimonials
const testimonials = document.getElementById('testimonials')


// find the dot template and container
const dotTemplate = document.getElementById('dot-template')
const testimonialDotsContainer = document.getElementById('testimonial-dots-container')


// find the arrow navigation
const previousTestimonial = document.getElementById('previous-testimonial')
const nextTestimonial = document.getElementById('next-testimonial')


// use zero-index for testimonial count
const numTestimonials = testimonials.children.length - 1


// initialize index
let currentIndex = 0


// prepare loop container
let testimonialsLoop


// prepare touch coordinate containers
let touchStart
let touchEnd


// add event listeners to arrow navigation
previousTestimonial.addEventListener('click', () => switchTestimonials(currentIndex - 1))
nextTestimonial.addEventListener('click', () => switchTestimonials(currentIndex + 1))


// append a new testimonial dot for each testimonial
for (let index = 0; index <= numTestimonials; index++) {
    // clone the dot template starting from the first div
    let dot = dotTemplate.content.cloneNode(true).querySelector('div')


    // set a custom attribute for later use
    dot.setAttribute('index', index)


    // append the newly created dot
    testimonialDotsContainer.appendChild(dot)
}


// find all of the testimonial dots that got appended
const testimonialDots = document.getElementsByClassName('testimonial-dot')


// ensure that the first dot is active
testimonialDots[0].classList.add('active')


// loop over the dots to add independent event listeners
for (let index = 0; index < testimonialDots.length; index++) {
    // listen for clicks on the individual dot
    testimonialDots[index].addEventListener('click', (event) => {
        // get the index and parse it as a number for strict comparisson
        const index = parseInt(event.target.getAttribute('index'))


        // guard clause: do nothing if index doesn't change
        if (index === currentIndex) return


        // deactivate whatever dot is currently active
        document.querySelector('.testimonial-dot.active').classList.remove('active')


        // activate the dot that was clicked
        event.target.classList.add('active')


        // iniate testimonial switch to dot index
        switchTestimonials(index)
    })
}


// switches to the next or previous testimonial
const switchTestimonials = (index) => {
    // cancel the testimonials loop
    clearInterval(testimonialsLoop)


    // go to end of list if index is negative
    if (index < 0) index = numTestimonials


    // restart count if index is too high
    if (index > numTestimonials) index = 0


    // hide the current testimonial and deactivate its dot
    testimonials.children[currentIndex].classList.add('hidden')
    testimonialDots[currentIndex].classList.remove('active')


    // assign the new index
    currentIndex = index


    // show the new testimonial and activate its dot
    testimonials.children[currentIndex].classList.remove('hidden')
    testimonialDots[currentIndex].classList.add('active')
    

    // reassign the testimonials loop
    testimonialsLoop = startTestimonialsLoop()
}


// starts the testimonial loop
const startTestimonialsLoop = () => {
    return setInterval(() => {
        switchTestimonials(currentIndex + 1)
    }, 5000)
}


// assign touch start coordinate
testimonials.addEventListener('touchstart', event => {
    touchStart = event.changedTouches[0].screenX
})


// assign touch end coordinate and handle swipe
testimonials.addEventListener('touchend', event => {
    touchEnd = event.changedTouches[0].screenX
    handleSwipe()
})


// checks the swipe direction
function handleSwipe() {
    if (touchEnd < touchStart) {
        switchTestimonials(currentIndex + 1)
    } else {
        switchTestimonials(currentIndex - 1)
    }
}


// initiate the loop
testimonialsLoop = startTestimonialsLoop()