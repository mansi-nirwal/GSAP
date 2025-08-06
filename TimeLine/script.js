// gsap.to(".box1",{
// x:300,
// duration:3,
// // opacity:0,
// // rotate:360,
// // repeat:-1,
// // yoyo:true,
// // delay:1

// })

// gsap.from(".box2",{
// x:200,
// // y:100,
// duration:3,
// // delay:1,
// // opacity:0.3,
// // rotate:360,
// // repeat:-1,
// // yoyo:true,
// // backgroundColor:"yellow"

// })
// gsap.to(".box3",{
// x:200,
// // y:100,
// duration:3,
// // delay:1,
// // opacity:0.3,
// // rotate:360,
// // repeat:-1,
// // yoyo:true,

// })

// //

//Timeline Example

// var tl = gsap.timeline();

// tl.to(".box1", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
// });
// tl.to(".box2", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
// });
// tl.to(".box3", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
// });



//timeline on real content

var tl=gsap.timeline();
tl.from("h1",{
y:-34,
opacity:0,
stagger:1,
duration:1,
delay:0.5
})

tl.from(".part2",{
y:-10,
opacity:0,
duration:1,
stagger:0.5,



})
