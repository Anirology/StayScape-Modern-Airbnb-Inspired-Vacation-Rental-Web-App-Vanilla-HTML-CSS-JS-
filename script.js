// =============================
// StayScape - Minimal JavaScript
// =============================

// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        const target=document.querySelector(link.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Search Button
const searchBtn=document.getElementById("searchBtn");

if(searchBtn){
    searchBtn.addEventListener("click",()=>{

        const destination=document.querySelector(".search-box input").value;

        if(destination===""){
            alert("Please enter a destination.");
            return;
        }

        alert("Searching stays in " + destination + "...");
        document.getElementById("explore").scrollIntoView({
            behavior:"smooth"
        });

    });
}

// View Property Buttons
document.querySelectorAll(".view-btn").forEach(btn=>{

    btn.addEventListener("click",()=>{

        document.getElementById("property").scrollIntoView({
            behavior:"smooth"
        });

    });

});

// Reserve Button
const reserve=document.getElementById("reserve");

if(reserve){

reserve.addEventListener("click",()=>{

alert("🎉 Reservation request submitted successfully!");

});

}

// Host Publish
const publish=document.querySelector(".host-form button");

if(publish){

publish.addEventListener("click",()=>{

alert("🏡 Listing published successfully!");

});

}

// Category Buttons
const categories=document.querySelectorAll(".categories button");

categories.forEach(btn=>{

btn.addEventListener("click",()=>{

categories.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");

});

});

// Simple Dashboard Counter Animation
document.querySelectorAll(".box h3").forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.color="#ff385c";
box.style.transform="scale(1.05)";

});

box.addEventListener("mouseleave",()=>{

box.style.color="";
box.style.transform="scale(1)";

});

});

// Navbar Shadow on Scroll
window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>30){

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

}else{

nav.style.boxShadow="0 4px 15px rgba(0,0,0,.08)";

}

});

// Footer Year
const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" StayScape. All Rights Reserved.";

}

console.log("✅ StayScape Loaded Successfully");