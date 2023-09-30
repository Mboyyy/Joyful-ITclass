$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  })

  $('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
  })
  
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })

  var typed = new Typed('.typing', {
    strings: [
      "“The science of today is the technology of tomorrow.” — Edward Teller",
      "“You affect the world by what you browse.” — Tim Berners-Lee",
      "“Technology is a useful servant but a dangerous master.” — Christian Lous Lange",
      "Technology makes things faster and more cost-effective, but it’s not perfect. It requires you to be as flexible as you can be.” — John Phillips",
      "“We are stuck with technology when what we really want is just stuff that works.” — Douglas Adams",
      "“Technology is the campfire around which we tell our stories.” — Laurie Anderson",
    ],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true,
  })

  // this is really cool
  // but you should vote Mikuni first

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }
    }
  });

})

const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        updateSliderPosition();
    }

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik

    updateSliderPosition();
});



// back to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var backButton = document.getElementById("back-to-top");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backButton.style.display = "block";
  } else {
      backButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}