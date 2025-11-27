document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is the contact form anchor to prevent full scroll
            if (this.getAttribute('href') === '#contact-form-anchor') {
                return; 
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust scroll position to account for the sticky header
                const headerHeight = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 2. Simple Form Submission Handling
    const contactForm = document.getElementById('contact-form-anchor');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (name === "" || email === "") {
                alert('Please fill out your Name and Email to request a quote.');
                return;
            }

            // In a real application, you would send this data to a server/email service here.
            
            alert(`Thank you, ${name}! Your quote request has been received. We will contact you at ${email} shortly.`);
            
            // Optionally clear the form
            contactForm.reset(); 
        });
    }
});