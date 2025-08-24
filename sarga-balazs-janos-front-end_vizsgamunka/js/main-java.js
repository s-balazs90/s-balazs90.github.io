// home columns
function noNewTab1() {
  window.location.href = "html/hikes.html";
}

function noNewTab2() {
  window.location.href = "html/gear.html";
}

function noNewTab3() {
  window.location.href = "html/gallery.html";
}

// gear image modal

document.querySelectorAll('[id^="myBtn"]').forEach(btn => {
  btn.addEventListener('click', () => {
    let num = btn.id.replace('myBtn', '');
    let modalId = 'myModal' + num;
    let modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'block';
  });
});

// Bezárás az X-re kattintva
document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.addEventListener('click', (e) => {
    let modal = e.target.closest('.modal');
    if (modal) modal.style.display = 'none';
  });
});

// Bezárás a sötét háttérre kattintva
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// Scroll to top

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

//toggleMenu
function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}

//Gallery-Lightbox
function openModal() {
  document.getElementById("myModalGallery").style.display = "block";
}

function closeModal() {
  document.getElementById("myModalGallery").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}