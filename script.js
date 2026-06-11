```javascript
// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});

// Active navbar link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "#fff";

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.style.color = "#ffc107";
        }

    });

});

// Navbar shadow on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 5px 20px rgba(255,193,7,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});
```


