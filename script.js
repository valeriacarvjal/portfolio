AOS.init({
    duration: 1200,
    once: true
});gsap.from(".intro", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out"
});

 heroTimeline = gsap.timeline();


heroTimeline
.from(".intro", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
})


.from("h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power4.out"
}, "-=0.3")


.from(".hero h2", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.4")


.from(".story", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power3.out"
}, "-=0.4")


.from(".hero-image", {
    opacity: 0,
    x: 80,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.6");

