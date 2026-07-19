document.addEventListener("DOMContentLoaded", () => {
    // Select all elements configured with fade-up classes
    const fadeElements = document.querySelectorAll(".fade-up");

    // Configure options for the scrolling observer engine
    const observerOptions = {
        root: null, // evaluates viewport bounds
        threshold: 0.1, // triggers execution when 10% element area shows
        rootMargin: "0px 0px -50px 0px" // early offset buffer
    };

    // Instantiate intersection handling rules
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply final layout rendering class properties
                entry.target.classList.add("visible");
                // Stop observing once element transitions complete
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Bind scroll observer tracking structures onto target nodes
    fadeElements.forEach(element => {
        scrollObserver.observe(element);
    });
});

