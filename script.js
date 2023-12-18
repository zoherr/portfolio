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
// Wait for the window to load
// Wait for the window to load
window.addEventListener("load", () => {
    const Loader = document.querySelector(".loader");

    Loader.classList.add("loader-hidden");

    Loader.addEventListener("transitionend", () => {
        document.body.removeChild(Loader); // Fix: pass the actual element to remove
    });
});

window.addEventListener("load", () => {
    const loadingPage = document.querySelector(".loading-page");
    const logoName = document.querySelector(".logo-name");
  
    // GSAP equivalent for ".loading-page" animation
    loadingPage.style.transition = "opacity 1.5s ease 3.5s";
    loadingPage.style.opacity = 0;
  
    // GSAP equivalent for ".logo-name" animation
    logoName.style.transition = "transform 2s ease 0.5s, opacity 2s ease 0.5s";
    logoName.style.transform = "translateY(0)";
    logoName.style.opacity = 1;
  
    // Remove loading page after animation
    loadingPage.addEventListener("transitionend", () => {
      document.body.removeChild(loadingPage);
    });
});

// Assuming you have an element with class "loader"
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.querySelector(".loader");

    // Add the "loader-hidden" class to hide the loader and show the main content
    loader.classList.add("loader-hidden");
});

//Typing Animation



document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const originalText = textElement.innerText;

    function type() {
        let charIndex = 0;
        const textToType = originalText;

        function typeCharacter() {
            const currentText = textToType.slice(0, ++charIndex);
            textElement.innerText = currentText;

            if (charIndex < textToType.length) {
                setTimeout(typeCharacter, 100); // Adjust the typing speed (milliseconds)
            } else {
                // Restart the typing animation after a brief delay
                charIndex = 0;
                setTimeout(typeCharacter, 2000); // Adjust the delay before restart (milliseconds)
            }
        }

        // Start typing after an initial delay
        setTimeout(typeCharacter, 1800); // Adjust the initial delay before starting (milliseconds)
    }

    // Start the typing animation
    type();
});
