// TODO: Fade in and out
// TODO: Prevent section from changing height

const testimonials = document.getElementById('testimonials')
const numTestimonials = testimonials.children.length - 1
const testimonialDotsContainer = document.getElementById('testimonial-dots-container')
const dotTemplate = document.getElementById('dot-template')

const previousTestimonial = document.getElementById('previous-testimonial')
const nextTestimonial = document.getElementById('next-testimonial')

previousTestimonial.addEventListener('click', () => switchTestimonials(currentIndex - 1))
nextTestimonial.addEventListener('click', () => switchTestimonials(currentIndex + 1))


let currentIndex = 0

for (let index = 0; index <= numTestimonials; index++) {
    let dot = dotTemplate.content.cloneNode(true).querySelector('div')
    dot.setAttribute('index', index)
    testimonialDotsContainer.appendChild(dot)
}

const testimonialDots = document.getElementsByClassName('testimonial-dot')

testimonialDots[0].classList.add('active')

for (let index = 0; index < testimonialDots.length; index++) {
    testimonialDots[index].addEventListener('click', (event) => {
        const index = parseInt(event.target.getAttribute('index'))

        if (index === currentIndex) return

        document.querySelector('.testimonial-dot.active').classList.remove('active')

        event.target.classList.add('active')

        switchTestimonials(index)
    })
}

const switchTestimonials = (index) => {
    clearInterval(testimonialsLoop)

    if (index < 0) index = numTestimonials
    if (index > numTestimonials) index = 0

    testimonials.children[currentIndex].classList.add('hidden')
    testimonialDots[currentIndex].classList.remove('active')

    if (index != null) {
        currentIndex = index
    } else {
        if (currentIndex === numTestimonials) {
            currentIndex = 0
        } else {
            currentIndex++
        }
    }

    testimonialDots[currentIndex].classList.add('active')
    testimonials.children[currentIndex].classList.remove('hidden')
    
    testimonialsLoop = startTestimonialsLoop()
}

const startTestimonialsLoop = () => {
    return setInterval(() => {
        switchTestimonials()
    }, 5000)
}

let testimonialsLoop = startTestimonialsLoop()

let touchStart
let touchEnd

testimonials.addEventListener('touchstart', function (event) {
    touchStart = event.changedTouches[0].screenX;
});

testimonials.addEventListener('touchend', function (event) {
    touchEnd = event.changedTouches[0].screenX;
    handleSwipe();
});


function handleSwipe() {
    if (touchEnd < touchStart) {
        switchTestimonials(currentIndex + 1)
    }

    if (touchEnd > touchStart) {
        switchTestimonials(currentIndex - 1)
    }
}