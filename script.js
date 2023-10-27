Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hrv", {videos: ["..videos/0.mp4", "..videos/2.mp4", "..videos/3.mp4"]})

gsap.to(".leftelem",{
    y: "-300%",
    ease: Power2,
    scrollTrigger:{
        trigger: ".fimages",
        pin: true,
        scroller: "body",
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,}
})

let sections = document.querySelectorAll(".leftelem")
Shery.imageEffect(".images", {
    style: 5,
    config: {onMouse: {value: 1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog){
                    setScroll(prog.progress + index)
                }
            })
        })
    },
  });