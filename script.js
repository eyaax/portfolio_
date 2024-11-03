var typed = new Typed(".multiple-text", {
    strings: ["Computer Science Student", "Frontend Developer", "Tutor"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true 
})

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

// Close the navbar when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
    });
});


