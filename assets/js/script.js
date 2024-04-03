
function navBarAnimation(){
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
            duration:0.1,
        })
    
        tl.to(".nav-bottom", {
            height: 0,
            duration:0.1,
    
        })
    
    })
}

navBarAnimation()
