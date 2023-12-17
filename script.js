function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.addEventListener('DOMContentLoaded', function () {
    // Default theme
    applyTheme('default');

    // Theme change button
    var themeButton = document.getElementById('themeButton');
    themeButton.addEventListener('click', function () {
        toggleTheme();
    });

    function toggleTheme() {
        // Check the current theme and switch to the next one
        if (document.body.classList.contains('default')) {
            applyTheme('theme1');
        } else if (document.body.classList.contains('theme1')) {
            applyTheme('theme2');
        } else if (document.body.classList.contains('theme2')) {
            applyTheme('theme3');
        } else if (document.body.classList.contains('theme3')) {
            applyTheme('theme4');
        } else {
            applyTheme('default');
        }
    }

    function applyTheme(theme) {
        // Remove existing theme classes
        document.body.classList.remove('default', 'theme1', 'theme2', 'theme3', 'theme4');

        // Apply the selected theme class
        document.body.classList.add(theme);
    }
});


// // Loading Animation
// window.addEventListener("load", () => {
//     const Loader = document.querySelector(".loader");

//     Loader.classList.add("loader-hidden");

//     Loader.addEventListener("transitionend", () => {
//         document.body.removeChild("loader");
//     })
// })
gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );
