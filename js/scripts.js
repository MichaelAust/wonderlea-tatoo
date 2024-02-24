let lenis = new Lenis({
  duration: 1.1,
  wheelMultiplier: .9,
})

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute('href'))
  });
})



// Textarea-Element auswählen
const textarea = document.querySelector('textarea');

// Überprüfen, ob ein Textarea-Element vorhanden ist
if (textarea) {
  // Event-Listener hinzufügen, der bei Änderungen im Textarea aufgerufen wird
  textarea.addEventListener('input', function () {
    // Überprüfen, ob das Scrollen notwendig ist
    if (textarea.scrollHeight > textarea.clientHeight) {
      // Scrollbalken vorhanden, data-lenis-prevent hinzufügen
      textarea.setAttribute('data-lenis-prevent', '');
    } else {
      // Kein Scrollbalken vorhanden, data-lenis-prevent entfernen (falls vorhanden)
      textarea.removeAttribute('data-lenis-prevent');
    }
  });
}




function addOnScreenClass() {
  const elementsWithFade = document.querySelectorAll('[data-lazy-animation]');
  elementsWithFade.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    ) {
      element.classList.add('on-screen');
    }
  });
}

window.addEventListener('load', function () {
  addOnScreenClass();
  window.addEventListener('scroll', addOnScreenClass);

  // MutationObserver für dynamische Änderungen am DOM
  const observer = new MutationObserver(function () {
    addOnScreenClass();
  });

  // Starte Beobachtung für Änderungen am DOM
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});


var lazyLoadInstance = new LazyLoad({
  // Ihre benutzerdefinierten Einstellungen gehen hier
  callback_loaded: function(element) {
    // Hier wird Ihre Funktion aufgerufen, wenn ein Bild geladen wurde
    ScrollTrigger.refresh();
    // Fügen Sie hier Ihre weitere Logik hinzu oder rufen Sie eine Funktion auf
  }
});



const bodyElement = document.body;

function ScrollDir(elm) {
  let lastScrollTop = 0;

  document.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      elm.classList.remove('scrolling-up');
      elm.classList.add('scrolling-down');
    } else if (scrollTop < lastScrollTop) {
      elm.classList.remove('scrolling-down');
      elm.classList.add('scrolling-up');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}
ScrollDir(bodyElement);

// Finde alle Elemente mit der Klasse "navi-toggle"
const naviToggleElements = document.querySelectorAll('[data-toggle-nav]');

// Füge einen Klick-Eventlistener zu jedem navi-toggle Element hinzu
naviToggleElements.forEach(function (naviToggleElement) {
  naviToggleElement.addEventListener("click", function () {
    // Finde das HTML-Element, dem die Klasse "open-navi" zugeordnet ist
    var naviElement = document.querySelector('html');

    // Toggle die Klasse "open-navi"
    naviElement.classList.toggle("open-navi");
  });
});


const dataToggleFilters = document.querySelectorAll('[data-toggle-filter]');

dataToggleFilters.forEach(function (dataToggleFilter) {
  dataToggleFilter.addEventListener("click", function () {
    // Überprüfe, ob die Bildschirmbreite unter 1200px liegt
    if (window.innerWidth < 1200) {
      var naviElement = document.querySelector('html');

      naviElement.classList.toggle("open-filter");
    }
  });
});

var e = document.documentElement.scrollTop,
  d = document.querySelector("html");
50 < e && d.classList.add("fixed"),
  window.addEventListener("scroll", function (e) {
    var t = document.documentElement.scrollTop;
    document.querySelector("html").classList.contains("edge") && (t = document.querySelector("html").scrollTop),
      50 < t ? d.classList.add("fixed") : d.classList.remove("fixed")
  })


// GSAP Start


if (document.body.classList.contains('start')) {

  //GSAP Mobile Start
  ScrollTrigger.matchMedia({
    ///GSAP Index Mobile START

    "(max-width: 640px)": function () {
      var headerScrollMobile = gsap.timeline({
        scrollTrigger: {
          trigger: "header",
          start: "top top",
          end: "bottom -15%",
          scrub: true,
        }
      });
      headerScrollMobile.to("header .elli img", {
        scale: 1.15,
        y: "70rem",
      });

      var sec1Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-1 .multi-img-ct",
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });
      sec1Tl.to(".sec-1 .first-img", {
          y: "-12rem",
        }, 0)
        .to(".sec-1 .second-img", {
          y: "12rem",
        }, 0);

    },
    ///GSAP Index Mobile END

    //GSAP Index MOBILE and TABLET Start

    "(max-width: 1200px)": function () {
      var sec2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery-teaser-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });
      sec2Tl.to(".gallery-teaser-content", {
          scale: "2.75",
        }, 0)
        .to(".gallery-teaser-ct .img-one", {
          y: "-30%",
        }, 0)
        .to(".gallery-teaser-ct .img-two", {
          x: "30%",
        }, 0)
        .to(".gallery-teaser-ct .img-four", {
          x: "-30%",
        }, 0)
        .to(".gallery-teaser-ct .img-five", {
          y: "30%",
        }, 0)
        .to(".gallery-teaser-ct .img-three-overlay", {
          opacity: 1,
        }, 0)
        .to(".gallery-teaser-ct .img-three", {
          opacity: .9,
        }, 0);

      var sec2TlBtn = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery-teaser-wrapper",
          start: "10% top",
          end: "bottom bottom",
          scrub: true,
        }
      });
      sec2TlBtn.fromTo(".gallery-btn .text", {
          opacity: "0%",
          scale: 0.9,
        }, {
          opacity: "100%",
          scale: 1,

        }, 0.05)
        .fromTo(".gallery-btn .squares img:first-of-type", {
          scale: 0,
          rotate: "90deg",
        }, {
          scale: 1,
          rotate: "0deg",
        }, 0)

        .fromTo(".gallery-btn .squares img:last-of-type", {
          scale: 0,
          rotate: "-90deg",
        }, {
          scale: 1,
          rotate: "0deg",
        }, 0)
        .fromTo(".gallery-btn .circles img:first-of-type", {
          scale: 0,
        }, {
          scale: 1,
        }, 0)
        .fromTo(".gallery-btn .circles img:last-of-type", {
          scale: 0,
        }, {
          scale: 1,
        }, 0.05)
        .fromTo(".gallery-btn .line-ct", {
          scaleY: 0,
        }, {
          scaleY: 1,
        }, 0)
    },

    ///GSAP Index Mobile

    "(min-width: 640px) and (max-width:1200px)": function () {
      var headerScrollTablet = gsap.timeline({
        scrollTrigger: {
          trigger: "header",
          start: "top top",
          end: "bottom -15%",
          scrub: true,
        }
      });

      headerScrollTablet.to("header .elli img", {
        scale: 1.15,
        y: "70rem",
      });




    },
    ///GSAP Index Mobile END

    ///GSAP Index Desktop
    "(min-width: 1200px)": function () {

      var headerScroll = gsap.timeline({
        scrollTrigger: {
          trigger: "header",
          start: "top top",
          end: "bottom -15%",
          scrub: true,
        }
      });

      headerScroll.to("header .elli", {
          scale: 1.2,
          y: "15rem",
        }, 0)
        .to("header .elli-bg", {
          y: "16rem",
        }, 0)

        .to("header .plant-ct img", {
          scale: 1.1,
          y: "22rem",
        }, 0)
        .to(".header-bg", {
          y: "30rem",
        }, 0)

      const svgs = gsap.utils.toArray('.animate-svg');
      svgs.forEach(svg => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: svg,
          }
        });
        tl.from(svg, {
          drawSVG: "0%"

        }).to(svg, {
          drawSVG: "100%"
        });
      });

      var tlSec1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec-1-scroll-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });

      tlSec1.fromTo(".sec-1 .second-img", {
          height: "0%",
        }, {
          height: "100%",
        })
        .fromTo(".sec-1 .second-img img", {
          scale: "1.5",
        }, {
          scale: "1",
        }, 0)
        .fromTo(".sec-1 .first-img", {
          height: "100%",
        }, {
          height: "0%",
        }, 0)
        .fromTo(".sec-1 .first-img img", {
          scale: "1",
        }, {
          scale: "1.5",
        }, 0)
      // .to(".sec-1 h2 span:first-of-type", {
      //   left: "-9.32rem",
      // }, 0)
      // .to(".sec-1 h2 span:last-of-type", {
      //   left: "9.32rem",
      // }, 0)
      ;

      var sec2TlDesktop = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery-teaser-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: .2,
        }
      });
      sec2TlDesktop.to(".gallery-teaser-content", {
          scale: "3.35",
        }, 0)
        .to(".gallery-teaser-ct .img-one", {
          y: "-27%",
        }, 0)
        .to(".gallery-teaser-ct .img-two", {
          x: "27%",
        }, 0)
        .to(".gallery-teaser-ct .img-four", {
          x: "-27%",
        }, 0)
        .to(".gallery-teaser-ct .img-five", {
          y: "27%",
        }, 0)
        .to(".gallery-teaser-ct .img-three", {
          opacity: .9,
        }, 0);

      var sec2TlDesktopText = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery-teaser-wrapper",
          start: "8% top",
          end: "bottom bottom",
          scrub: true,
        }
      });
      sec2TlDesktopText.fromTo(".desktop-gallery-ct .line>span", {
          rotateY: "90deg",
          autoAlpha: 0,
          x: "5rem",
        }, {
          rotateY: "0deg",
          autoAlpha: 1,
          x: "0rem",
          stagger: 0.1,
        })
        .fromTo(".desktop-gallery-ct .line .ansehen", {
          autoAlpha: 0,
          y: "-5rem",
        }, {
          autoAlpha: 1,
          y: "0rem",
        }, 0.1)

      var reviewCircle = gsap.timeline({
        scrollTrigger: {
          trigger: ".reviews-text-col",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });

      reviewCircle.to(".half-circle-ct .circle:last-of-type", {
        rotate: "360deg",
      });
    },
    ///GSAP Index Desktop END

    // GSAP All
    "all": function () {



      // ScrollTriggers created here aren't associated with a particular media query,
      ///Ablauf Section
      var reviewImg2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".review-2",
          start: "top bottom",
          end: "50% 50%",
          scrub: true,
        }
      });
      reviewImg2.to(".reviews-img-2", {
          height: "100%",
        })
        .fromTo(".reviews-img-2 img", {
          scale: 1.2,
        }, {
          scale: 1,
        }, 0);

      var reviewImg3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".review-3",
          start: "top bottom",
          end: "50% 50%",
          scrub: true,
        }
      });
      reviewImg3.to(".reviews-img-3", {
          height: "100%",
        })
        .fromTo(".reviews-img-3 img", {
          scale: 1.2,
        }, {
          scale: 1,
        }, 0);

      // var footerTl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".footer-scroll-wrapper",
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: true,
      //   }
      // });
      // footerTl.to(".keep-scrolling", {
      //   opacity: 0,
      //   letterSpacing: "1em",
      // })
      // .from(".next-page-name", {
      //   letterSpacing: "0.025em",
      // }, 0)
      // .from(".svgs-ct .lines-top", {
      //   scaleY: 0,
      // }, 0)
      // .from(".svgs-ct .lines-bottom", {
      //   scaleY: 0,
      // }, 0)
      // .from(".svgs-ct .big-rectangle", {
      //   scale: 0,
      //   rotate: "270deg",
      // }, 0)
      // .from(".svgs-ct .small-rectangle", {
      //   scale: 0,
      //   rotate: "-180deg",
      // }, 0)
      // .from(".svgs-ct .big-circle", {
      //   scale: 0,
      // }, 0)
      // .from(".svgs-ct .small-circle", {
      //   scale: 0,
      //   rotate: "-360deg",
      // }, 0)
      // .from(".svgs-ct .single-line-top", {
      //   scaleY: 0,
      // }, 0)
      // .from(".svgs-ct .single-line-bottom", {
      //   scaleY: 0,
      // }, 0);


    }
    // GSAP All END

  });
  //GSAP

};


if (document.body.classList.contains('ueber')) {

  //GSAP Mobile Start
  ScrollTrigger.matchMedia({
    "(min-width: 1200px)": function () {
      var headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: "header",
          start: "bottom bottom",
          end: "90% top",
          scrub: true,
        }
      });
      headerTl.to("h1 >div", {
        y: "-100%",
        opacity: 0,
      });

      var reviewCircle = gsap.timeline({
        scrollTrigger: {
          trigger: ".reviews-text-col",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });

      reviewCircle.to(".half-circle-ct .circle:last-of-type", {
        rotate: "360deg",
      });
    },

    // GSAP All
    "all": function () {

      var headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: "ueber-sec-1",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      });
      headerTl.to(".shine", {
         rotate: "180deg",
      })
      .to(".prism", {
        rotate: "-270deg",
     }, 0);



      // ScrollTriggers created here aren't associated with a particular media query,
      ///Ablauf Section
      var reviewImg2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".review-2",
          start: "top bottom",
          end: "50% 50%",
          scrub: true,
        }
      });
      reviewImg2.to(".reviews-img-2", {
          height: "100%",
        })
        .fromTo(".reviews-img-2 img", {
          scale: 1.2,
        }, {
          scale: 1,
        }, 0);

      var reviewImg3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".review-3",
          start: "top bottom",
          end: "50% 50%",
          scrub: true,
        }
      });
      reviewImg3.to(".reviews-img-3", {
          height: "100%",
        })
        .fromTo(".reviews-img-3 img", {
          scale: 1.2,
        }, {
          scale: 1,
        }, 0);

    }
    // GSAP All END

  });
  //GSAP

};



var footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-scroll-wrapper",
    start: "5% bottom",
    end: "bottom bottom",
    scrub: true,
  }
});
// footerTl.to(".keep-scrolling", {
//     opacity: 0,
//     letterSpacing: "1em",
//   })
//   .from(".next-page-name", {
//     letterSpacing: "0.025em",
//   }, 0)
  footerTl.from(".svgs-ct .lines-top", {
    scaleY: 0,
  }, 0)
  .from(".svgs-ct .lines-bottom", {
    scaleY: 0,
  }, 0)
  .from(".svgs-ct .big-rectangle", {
    scale: 0,
    rotate: "270deg",
  }, 0)
  .from(".svgs-ct .small-rectangle", {
    scale: 0,
    rotate: "-180deg",
  }, 0)
  .from(".svgs-ct .big-circle", {
    scale: 0,
  }, 0)
  .from(".svgs-ct .small-circle", {
    scale: 0,
    rotate: "-360deg",
  }, 0)
  .from(".svgs-ct .single-line-top", {
    scaleY: 0,
  }, 0)
  .from(".svgs-ct .single-line-bottom", {
    scaleY: 0,
  }, 0);


jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.4,
});

// Überprüfen, ob sich das Body-Element auf der Seite mit der Klasse "faq" befindet
if (document.body.classList.contains('faq')) {
  // Führe den Code nur aus, wenn das Body-Element die Klasse "faq" hat
  new Accordion('.accordion-container', {
    duration: 800,
  });
};



////Galerie 


if (document.body.classList.contains("galerie")) {

  var fetchMasonry = function (container, items, columns) {
    var CONTAINER_EL = document.querySelector("#" + container);
    var WRAPPER_CONTAINER_EL = CONTAINER_EL.parentNode;
    var ITEMS_ELS = document.querySelectorAll("." + items);
    CONTAINER_EL.parentNode.removeChild(CONTAINER_EL);
    var NEW_CONTAINER_EL = document.createElement('div');
    NEW_CONTAINER_EL.setAttribute('id', container);
    NEW_CONTAINER_EL.classList.add('masonry-layout', "columns-" + columns);
    WRAPPER_CONTAINER_EL.appendChild(NEW_CONTAINER_EL);
    for (var i = 1; i <= columns; i++) {
      var COLUMN = document.createElement('div');
      COLUMN.classList.add("masonry-column-" + i);
      NEW_CONTAINER_EL.appendChild(COLUMN);
    }
    var countColumn = 1;
    ITEMS_ELS.forEach(function (item) {
      var col = document.querySelector("#" + container + " > .masonry-column-" + countColumn);
      col.appendChild(item);
      countColumn = countColumn < columns ? countColumn + 1 : 1;
    });
  };

  // Funktion, die abhängig von der Bildschirmbreite unterschiedlichen Code ausführt
  function handleScreenSize() {
    // Bildschirmbreite abrufen
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Wenn die Bildschirmbreite größer als 1200px ist
    if (screenWidth < 1200) {
      // Führe diesen Code aus
      fetchMasonry('masonry', 'image', 2);
    } else {
      // Andernfalls führe diesen Code aus
      fetchMasonry('masonry', 'image', 3);
    }
  }

  // Event-Listener hinzufügen, um die Funktion bei Änderungen der Bildschirmgröße aufzurufen
  window.addEventListener('resize', handleScreenSize);

  // Initial beim Laden der Seite aufrufen
  handleScreenSize();


  // Funktion zum Anzeigen von Bildern basierend auf dem data-type
  var showImagesByType = function (type) {
    var IMAGES_ELS = document.querySelectorAll('.image');
    var masonry = document.getElementById('masonry'); // Das Element, das die Masonry-Anordnung enthält

    // Ursprüngliche und neue Höhe merken
    var originalHeight = masonry.clientHeight;
    var newHeight;

    // Animation: Masonry ausblenden und Höhe anpassen
    gsap.to(masonry, {
      opacity: 0,
      duration: 0.3,
      onComplete: function () {
        // Bilder entsprechend des data-type anzeigen/ausblenden
        IMAGES_ELS.forEach(function (image) {
          if (type === 'alle' || image.getAttribute('data-type') === type) {
            image.style.display = 'block';
          } else {
            image.style.display = 'none';
          }
        });

        // Die Höhe des masonry-Containers anpassen
        masonry.style.height = 'auto';
        newHeight = masonry.clientHeight;
        gsap.to(masonry, {
          height: originalHeight,
          duration: 0
        }); // Zur alten Höhe animieren

        // Timeout verwenden, um den Übergang der Höhenänderung zu ermöglichen
        setTimeout(function () {
          gsap.to(masonry, {
            opacity: 1,
            height: newHeight,
            duration: 0.3,
            onComplete: function () {
              // Nach Abschluss der Animation ScrollTrigger aktualisieren
              ScrollTrigger.refresh();
            }
          }); // Zur neuen Höhe animieren
        }, 0);
      }
    });
  };

  // Event-Listener für Kategorien
  var categoryList = document.getElementById('category-list');
  categoryList.addEventListener('click', function (event) {
    var clickedType = event.target.getAttribute('data-type');
    if (clickedType) {
      showImagesByType(clickedType);
    }
  });


  // Event-Listener für Kategorien
  var categoryElements = document.getElementsByClassName('category-ct');

  for (var i = 0; i < categoryElements.length; i++) {
    categoryElements[i].addEventListener('click', function (event) {
      // Alle Elemente mit der Klasse "category-ct" initialisiert
      for (var j = 0; j < categoryElements.length; j++) {
        categoryElements[j].classList.remove('active');
      }

      // Das angeklickte Element bekommt die Klasse "active"
      event.target.classList.add('active');

      var clickedType = event.target.getAttribute('data-type');
      if (clickedType) {
        // Überprüfe, ob die Bildschirmbreite kleiner als 1200 Pixel ist
        if (window.innerWidth < 1200) {
          // Scrolle nach oben
          window.scrollTo(0, 0);
        }
      }
    });
  }
  const images = document.querySelectorAll('.lightbox-ct img');
  const lightboxContainer = document.createElement('div');
  lightboxContainer.classList.add('lightbox-container');
  document.body.appendChild(lightboxContainer);

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      const lightboxContent = document.createElement('div');
      lightboxContent.classList.add('lightbox-content');

      const xElement = document.createElement('div');
      xElement.classList.add('x');
      xElement.innerHTML = `
              <div class="line"></div>
              <div class="line"></div>
          `;

      const lightboxImage = document.createElement('img');
      lightboxImage.src = image.src;

      lightboxContent.appendChild(xElement);
      lightboxContent.appendChild(lightboxImage);
      lightboxContainer.innerHTML = '';
      lightboxContainer.appendChild(lightboxContent);
      lightboxContainer.classList.add('active');
    });
  });

  lightboxContainer.addEventListener('click', function () {
    lightboxContainer.classList.remove('active');
  });

}

function switchLabels() {
  var inputs = document.querySelectorAll('form [name]');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function () {
      const id = this.getAttribute('id');
      document.querySelector('[for="' + id + '"]').classList.add('focus');
    });
    inputs[i].addEventListener('blur', function () {
      const id = this.getAttribute('id');
      if (this.value.length < 1 && document.querySelector('[for="' + id + '"]').classList.contains('focus')) {
        document.querySelector('[for="' + id + '"]').classList.remove('focus');
      }
    });
  }
}
switchLabels();



const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", e => {
    if (
      !link.hash.startsWith("#") &&
      link.href.startsWith(location.origin) &&
      (link.target !== "_blank" || e.ctrlKey || e.metaKey) && // Überprüfung des neuen Tabs
      !link.classList.contains("lightbox-zoom-image") &&
      !link.classList.contains("cms-file") && // Überprüfung der Klasse "cms-file"
      e.button !== 1 && // Überprüfung des Mausrads
      !(e.altKey || (e.buttons === 1 && e.altKey)) && // Überprüfung der Alt-Taste
      !e.ctrlKey // Überprüfung der Ctrl-Taste
    ) {
      // Füge die Klasse "is-trans" zum HTML-Element hinzu
      document.documentElement.classList.add("is-trans");

      // Füge einen Timeout von 300 Millisekunden (0,3 Sekunden) hinzu
      setTimeout(() => {
        // Hier kannst du die Seite wechseln, nachdem die Verzögerung abgelaufen ist
        window.location.href = link.href;
      }, 300);

      // Verhindere das Standardverhalten des Links (z.B. das Navigieren zu einer neuen Seite)
      e.preventDefault();
    }
  });
});