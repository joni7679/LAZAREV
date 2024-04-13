
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
