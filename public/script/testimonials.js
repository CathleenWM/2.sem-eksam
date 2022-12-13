// TODO: Fade in and out
// TODO: Add arrow keys to desktop on hover
// TODO: Implement swipe functionality

const testimonials = document.getElementById('testimonials')
const numTestimonials = testimonials.children.length - 1
const testimonialDotsContainer = document.getElementById('testimonial-dots-container')
const dotTemplate = document.getElementById('dot-template')

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

        clearInterval(testimonialsLoop)
        switchTestimonials(index)
        testimonialsLoop = startTestimonialsLoop()
    })
}

const switchTestimonials = (index) => {
    testimonials.children[currentIndex].classList.add('hidden')
    testimonialDots[currentIndex].classList.remove('active')

    console.log('index before', currentIndex)

    if (index != null) {
        currentIndex = index
    } else {
        if (currentIndex === numTestimonials) {
            currentIndex = 0
        } else {
            currentIndex++
        }
    }

    console.log('index after', currentIndex)

    testimonialDots[currentIndex].classList.add('active')
    testimonials.children[currentIndex].classList.remove('hidden')
}

const startTestimonialsLoop = () => {
    return setInterval(() => {
        switchTestimonials()
    }, 5000)
}

let testimonialsLoop = startTestimonialsLoop()