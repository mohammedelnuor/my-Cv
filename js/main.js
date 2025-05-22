
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
  });
});




// api

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
          let json = await response.json();
          if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});




let Home   =  document.querySelector('.slit-1');
let About= document.querySelector('.slite-3');
 let skills=  document.querySelector('.slite-4');
let Education=    document.querySelector('.slite-6');
let Projects=    document.querySelector('.slite-7');
let Contact=    document.querySelector('.slite-8');


let AllLinks = document.querySelectorAll('.links  a ');

function scroollToSomth(elements){

elements.forEach(ele => {

ele.addEventListener('click', (e) => {

    e.preventDefault();

    document.querySelector(e.target.dataset.section).scrollIntoView({

        behavior: 'smooth'
    });
});

});
}



console.log(AllLinks);

scroollToSomth(AllLinks);



// mobile

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
// Add smooth scrolling to all links