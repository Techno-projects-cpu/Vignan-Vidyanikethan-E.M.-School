/* ==========================================
   Project Vignan
   Designed & Developed by Nezaad Industries
========================================== */

// Smooth scroll for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// Fade in sections on scroll

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// Navbar blur on scroll

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.background="rgba(255,255,255,.88)";

navbar.style.boxShadow="0 15px 40px rgba(0,0,0,.08)";

}

else{

navbar.style.background="rgba(255,255,255,.72)";

navbar.style.boxShadow="0 10px 35px rgba(0,0,0,.06)";

}

});


// Active navigation

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// Small hover animation

document.querySelectorAll(".glass-card,.feature-card,.timeline-card,.campus-card,.contact-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// Footer year

const year=document.createElement("span");

year.textContent=" © "+new Date().getFullYear();

const footer=document.querySelector(".footer-bottom");

if(footer){

footer.appendChild(year);

}
