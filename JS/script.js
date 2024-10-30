Document.addEventListener("DOMContentLoaded", () => {
    // Add 'active' class to the header links on click
    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Prevent default link behavior
            event.preventDefault();

            // Remove 'active' class from all links
            navLinks.forEach(l => l.classList.remove("active"));

            // Add 'active' class to the clicked link
            link.classList.add("active");
        });
    });

    // Animation for main section on load
    const mainSection = document.querySelector("main");
    mainSection.style.opacity = 0;
    mainSection.style.transition = "opacity 1s";

    // Fade-in effect on load
    setTimeout(() => {
        mainSection.style.opacity = 1;
    }, 500);

    // Placeholder text cycling for search box
    const searchBox = document.querySelector("main input");
    const placeholderTexts = [
        "Search for restaurant, cuisine or a dish",
        "Pizza, Biryani, Desserts...",
        "Discover the best food near you!"
    ];
    let placeholderIndex = 0;

    setInterval(() => {
        placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
        searchBox.placeholder = placeholderTexts[placeholderIndex];
    }, 3000);
});