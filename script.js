

console.log("HTML Skills Demo script loaded successfully!");


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior
        const targetId = this.getAttribute('href'); // Get the ID from the href attribute
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the target section
        });
    });
});