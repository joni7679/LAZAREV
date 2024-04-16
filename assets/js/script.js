
function locomotiveScrollAnimation() {

    gsap.registerPlugin(ScrollTrigger);
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

locomotiveScrollAnimation()

function navBarAnimation() {
    let navBar = document.querySelector("nav");
    navBar.addEventListener("mouseenter", () => {

        let tl = gsap.timeline()
        tl.to(".nav-bottom", {
            height: "21vh",
        })

        tl.to(".nav-part-2 h5", {
            display: "block"
        })
        tl.to(".nav-part-2 h5 span", {
            y: 0,
            // duration: 0.3,
            stagger: {
                amount: 0.6
            }
        })

    })

    navBar.addEventListener("mouseleave", () => {

        let tl = gsap.timeline()
        tl.to(".nav-part-2 h5 span", {
            y: 25,
            // duration: 0.5,
            stagger: {
                amount: 0.2
            }
        })

        tl.to(".nav-part-2 h5", {
            display: "none",
            duration: 0.1,
        })

        tl.to(".nav-bottom", {
            height: 0,
            duration: 0.1,

        })

    })
}
// navBarAnimation()

function imgcursorEffect() {
    let rightElem = document.querySelectorAll(".right-elem");
    // console.log(rightElem)
    rightElem.forEach((elem) => {
        // console.log(elem.childNodes[3])
        let imges = elem.childNodes[3]
        elem.addEventListener("mouseenter", function () {
            console.log(elem.getBoundingClientRect().y)
            imges.style.opacity = 1;
            imges.style.scale = 1;
        })

        elem.addEventListener("mouseleave", function () {
            imges.style.opacity = 0;
            imges.style.scale = 0;
        })


        elem.addEventListener("mousemove", (dets) => {
            // console.log(dets)
            gsap.to(imges, {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 20,
            })

        })

    })
}
imgcursorEffect()


let reelCenter = document.querySelector(".reel-center");
let video = document.querySelector(".reel-center video");
reelCenter.addEventListener("click", () => {
    video.play();
    gsap.to(video, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: 0,
    })
})

video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
        transform: "scaleX(0.7) scaleY(0.2)",
        opacity: 0,
        borderRadius: "30px",
    })
})


// slove korte hobe video section ta ke 
function customcursorEffect() {
    let sections = document.querySelectorAll(".sec-right-part");
    let customcursor = document.querySelectorAll(".cursor-div")

    sections.forEach((elem) => {
        console.log(elem)

        elem.addEventListener("mouseenter", () => {
            // console.log(elem.childNodes[5])
            elem.childNodes[5].style.opacity = 1;
            elem.childNodes[5].play();


        })

        elem.addEventListener("mouseleave", () => {
            console.log(elem.childNodes[5])
            elem.childNodes[5].style.opacity = 0;
            elem.childNodes[5].load();


        })

    })

}

customcursorEffect()


function productSectionAnimation() {
    gsap.from("#product-btn-part1 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#product-btn-part1",
            scroller: ".main",
            // markers: true,
            start: "top 80%",
            end: "top 10%",
            scrub: true,
        }
    });
}

productSectionAnimation()

function loadingAnimation() {
    let tl = gsap.timeline()
    tl.from(".hero-section", {
        opacity: 0,
        duration: 0.1,
        dealy: 0.2,
    })

    tl.from(".hero-section", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0
    })

    tl.from(".hero-section h1, .hero-section p, .hero-section div", {
        opacity: 0,
        stagger: 0.2
    })
}
loadingAnimation()