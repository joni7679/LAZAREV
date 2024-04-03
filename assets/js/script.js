
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

navBarAnimation()
function imgcursorEffect() {
    let rightElem = document.querySelectorAll(".right-elem");
    console.log(rightElem)
    rightElem.forEach((elem) => {
        console.log(elem.childNodes[3])
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
                x: dets.x - elem.getBoundingClientRect().x,
                y: dets.y - elem.getBoundingClientRect().y,
            })

        })

    })
}

imgcursorEffect()