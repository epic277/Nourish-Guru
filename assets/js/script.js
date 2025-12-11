const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");


hamburger.addEventListener("click", () => {
const expanded = hamburger.getAttribute("aria-expanded") === "true";
hamburger.setAttribute("aria-expanded", !expanded);
navLinks.classList.toggle("active");
});

// PARTICLE MOTION (LIGHT)
const particleLayer = document.querySelector('.particles');
let offset = 0;
setInterval(() => {
offset += 0.3;
particleLayer.style.backgroundPosition = `0px ${offset}px`;
}, 30);

/* JS - Fade-in animation on scroll */
const pillars = document.querySelectorAll('.pillar');


const revealPillars = () => {
const triggerBottom = window.innerHeight * 0.9;
pillars.forEach(pillar => {
const pillarTop = pillar.getBoundingClientRect().top;
if(pillarTop < triggerBottom) {
setTimeout(() => {
pillar.style.opacity = '1';
pillar.style.transform = 'translateX(0)';
}, pillar.dataset.delay);
}
});
};


window.addEventListener('scroll', revealPillars);
window.addEventListener('load', revealPillars);


// checklist tick animation on scroll (replays every time)
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.check-item');

  if (!('IntersectionObserver' in window)) {
    // fallback: animate all immediately
    items.forEach(i => i.classList.add('animate'));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // trigger tick animation
        entry.target.classList.add('animate');

        // reset animation so it can replay when leaving + re-entering
        const tick = entry.target.querySelector('.tick');
        // force reflow reset technique
        tick.style.animation = 'none';
        // next frame restore animation
        requestAnimationFrame(() => {
          tick.style.animation = '';
          // re-add class in case it was removed before; class controls styling not animation property
        });
      } else {
        // remove class so it will replay next time
        entry.target.classList.remove('animate');
      }
    });
  }, { threshold: 0.5 });

  items.forEach(it => obs.observe(it));
});

 const revealElements = document.querySelectorAll('.pth-fade-left, .pth-fade-right');

        function revealOnScroll() {
            const trigger = window.innerHeight * 0.85;

            revealElements.forEach(element => {
                const top = element.getBoundingClientRect().top;
                if (top < trigger) {
                    element.classList.add('pth-show');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();


document.addEventListener("DOMContentLoaded", () => {
    
    const elements = document.querySelectorAll(
        ".fade-in, .fade-in-left, .fade-in-right"
    );

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach((el) => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add("show");
            } else {
                el.classList.remove("show"); // so animation happens again on scroll
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

//metabolic reset
const mtrsElements = document.querySelectorAll('.mtrs-fade-left, .mtrs-fade-right');

        function mtrsReveal() {
            const trigger = window.innerHeight * 0.85;

            mtrsElements.forEach(el => {
                const top = el.getBoundingClientRect().top;
                if (top < trigger) {
                    el.classList.add('mtrs-show');
                }
            });
        }

        window.addEventListener('scroll', mtrsReveal);
        mtrsReveal();

//diabetes
const dirRevealElements = document.querySelectorAll('.dir-fade-left, .dir-fade-right');

        function dirRevealOnScroll() {
            const trigger = window.innerHeight * 0.85;

            dirRevealElements.forEach(element => {
                const top = element.getBoundingClientRect().top;
                if (top < trigger) {
                    element.classList.add('dir-show');
                }
            });
        }

        window.addEventListener('scroll', dirRevealOnScroll);
        dirRevealOnScroll();

        //postpartum
        const ppwRevealElements = document.querySelectorAll('.ppw-fade-left, .ppw-fade-right');

        function ppwRevealOnScroll() {
            const trigger = window.innerHeight * 0.85;

            ppwRevealElements.forEach(element => {
                const top = element.getBoundingClientRect().top;
                if (top < trigger) {
                    element.classList.add('ppw-show');
                }
            });
        }

        window.addEventListener('scroll', ppwRevealOnScroll);
        ppwRevealOnScroll();

        //corporate wellness / workshops
        const cwwRevealElements = document.querySelectorAll('.cww-fade-left, .cww-fade-right');

        function cwwRevealOnScroll() {
            const trigger = window.innerHeight * 0.85;

            cwwRevealElements.forEach(element => {
                const top = element.getBoundingClientRect().top;
                if (top < trigger) {
                    element.classList.add('cww-show');
                }
            });
        }

        window.addEventListener('scroll', cwwRevealOnScroll);
        cwwRevealOnScroll();

        //Ingredient & product consulting for brands

        const ipcRevealElements = document.querySelectorAll('.ipc-fade-left, .ipc-fade-right');

        function ipcRevealOnScroll() {
            const trigger = window.innerHeight * 0.85;
            ipcRevealElements.forEach(element => {
                const top = element.getBoundingClientRect().top;
                if (top < trigger) {
                    element.classList.add('ipc-show');
                }
            });
        }

        window.addEventListener('scroll', ipcRevealOnScroll);
        ipcRevealOnScroll();

        //Blog page
        document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".blg-fade-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("blg-show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

// ===== TESTIMONIAL CAROUSEL SCRIPT =====
    const track = document.querySelector('.tes-track');
    const cards = Array.from(track.children);
    const nextBtn = document.querySelector('.tes-next');
    const prevBtn = document.querySelector('.tes-prev');

    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % cards.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    // Auto-slide
    setInterval(() => {
        index = (index + 1) % cards.length;
        updateCarousel();
    }, 5000);

    // Featured blog animation
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
