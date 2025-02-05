document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });

    document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        alert("Your message has been sent!");
        event.target.reset();
    });
});
