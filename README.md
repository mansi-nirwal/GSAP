GSAP Learning Repository

Welcome to my GSAP (GreenSock Animation Platform) learning journey! This repository contains all the code, notes, and examples I’ve created while learning how to build high-performance animations using GSAP.

📌 What is GSAP?
GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating stunning, performant animations for the web. It works seamlessly with HTML, CSS, SVG, Canvas, and more.

Official website: https://gsap.com



📚 Topics Covered
✅ Introduction to GSAP
✅ Tween Basics (gsap.to(), gsap.from(), gsap.fromTo())
✅ Timelines (gsap.timeline())
✅ Staggered Animations
✅ Easing Functions
✅ ScrollTrigger Plugin
✅ Text & SVG Animations
✅ Responsive Animations
✅ Advanced Animation Techniques
✅ Performance Optimization

🛠️ Getting Started
📦 Installation
Option 1: CDN
html
Copy code
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
Option 2: NPM
bash
Copy code
npm install gsap
Then in your JS file:

js
Copy code
import gsap from "gsap";
✨ Basic Example
html
Copy code
<div class="box"></div>

<script>
  gsap.to(".box", {
    x: 300,
    duration: 2,
    rotation: 360,
    ease: "power2.inOut"
  });
</script>
📂 Folder Structure
bash
Copy code
gsap-learning/
├── 01-intro/
├── 02-tweens/
├── 03-timelines/
├── 04-stagger/
├── 05-scrolltrigger/
├── 06-svg-animation/
├── 07-projects/
└── README.md
Each folder contains:

index.html – the example page

style.css – basic styles

main.js – GSAP animation scripts
