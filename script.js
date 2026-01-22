let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
let login = document.querySelector('.loginform');
document.querySelector('#login').addEventListener('click', () => {
      login.classList.toggle('active');
});
menubtn.addEventListener('click', () => {
      menubtn.classList.toggle('fa-times');
      navbar.classList.toggle('active');
});
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
      navLinks.forEach(link => {
            link.classList.remove('active');
      });
      sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                  document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
            }
      });
      let header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);
      menubtn.classList.remove('fa-times');
      navbar.classList.remove('active');
      login.classList.remove('active');
};
function func() {
      var email = document.getElementById('emailId').value;
      var password = document.getElementById('passwordId').value;
      if (email === "admin@gmail.com" && password === "12345678") {
            alert("Login Successfully!");
            location.reload();
      } else if (email === "") {
            alert('Please fill in the email field');
            return false;
      } else if (password === "") {
            alert('Please fill in the password field');
            return false;
      } else {
            alert("Invalid Information!");
            return false;
      }
}
var swiper = new Swiper(".course-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
      },
      breakpoints: {
            540: {
                  slidesPerView: 1,
            },
            768: {
                  slidesPerView: 2,
            },
            1024: {
                  slidesPerView: 3,
            },
      },
});
var swiper = new Swiper(".teachers-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
      },
      breakpoints: {
            540: {
                  slidesPerView: 1,
            },
            768: {
                  slidesPerView: 2,
            },
            1024: {
                  slidesPerView: 3,
            },
      },
});
var swiper = new Swiper(".reviews-slider", {
      spaceBetween: 20,
      grabCursor: true,
      loop: true,
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
      },
      breakpoints: {
            540: {
                  slidesPerView: 1,
            },
            768: {
                  slidesPerView: 2,
            },
            1024: {
                  slidesPerView: 4,
            },
      },
});