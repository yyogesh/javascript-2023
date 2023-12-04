document.addEventListener('DOMContentLoaded', function () {
   const box = document.getElementById('animated-box');
   let isAnimating = false;

   box.addEventListener('click', () => {
    if(!isAnimating) {
        isAnimating = true;

        box.style.transform = 'translateX(200px)';

        setTimeout(() => {
            isAnimating = false;
            box.style.transform = 'translateX(0)';
        }, 1000)
    }
   })
});


// Jquery

// GSAP 

// CANVAS

// WEB ANIMATION API 

// SVG 

// DATE AND TIME 

// OWN LIB

// JAVASCRIPT API 


// CANVAS 

// Javascript Memory management 

// maintaine state, localstroage, session stroage, cookies, security, query string

// security

// AODA

// Event Handling - types , deep dive , wrt e-commerce , Common mistakes dev’s make ? 

// jQuery, Selectors and Manipulation, Ajax and Asynchronous Operations || Tips and tricks in DATA handling if any ( from API) ? any common issues you can think of for the above?? 

// Bootstrap ( how its loaded in browser? What is it it , examples using the ovrerland website), HTML , CSS ( few concepts) - wrt ecommerce || any common issues you can think of for the above?? 

// KnockoutJS: How are they using in Project ? What should I know to the least ? How can I practice ? any common issues you can think of for the above?? 

// Node JS - basics , how is it used in Overland ? any common issues you can think of for the above?? 

// SQL -> How do I connect , Resolve Any well known issues that you can remember? 

// Ask me on OOPS basics , and we can further discuss about .NET and how is it different from jAVA . I know bit of JAVA

