gsap.from(".box",{
x:300,
duration:2,
delay:1,
rotate:360,
repeat:-1,
yoyo:true
}) 

gsap.to("#box2",{
   x:200,
   y:100,
   duration:2,
   delay:1,
   backgroundColor:"pink",
   borderRadius: "50%",
   scale:0.5,
   repeat:-1,
   yoyo:true
}) 
 
gsap.from("h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:1
})



