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
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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