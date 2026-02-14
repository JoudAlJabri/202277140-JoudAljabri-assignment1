// Feature 1: TIME-BASED GREETING
// Shows different greetings based on time of day

function displayGreeting() {
    // Get the greeting element
    const greetingElement = document.getElementById('greeting');
    
    // Get current hour (0-23)
    const currentHour = new Date().getHours();
    
    // Variable to store our greeting message
    let greeting;
    
    // Determine greeting based on time
    if (currentHour < 12) {
        greeting = "Good Morning! ☀️";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon! 🌤️";
    } else {
        greeting = "Good Evening! 🌙";
    }
    
    // Display the greeting
    greetingElement.textContent = greeting;
}

// Call the greeting function when page loads
displayGreeting();


// Feature 2: DARK/LIGHT THEME TOGGLE
// Switches between dark and light modes

// Get the theme toggle button
const themeToggle = document.getElementById('themeToggle');

// Check if user has a saved preference in browser storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

// Add click event to toggle button
themeToggle.addEventListener('click', function() {
    // Toggle the light-theme class on body
    document.body.classList.toggle('light-theme');
    
    // Save user's preference
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});


// Feature 3: SMOOTH SCROLLING
// Smoothly scrolls to sections when clicking buttons

function scrollToSection(sectionId) {
    // Get the section element by its ID
    const section = document.getElementById(sectionId);
    
    // Scroll to that section smoothly
    section.scrollIntoView({ 
        behavior: 'smooth',  // Makes it smooth instead of instant
        block: 'start'       // Aligns to top of viewport
    });
}


// Feature 4: FORM HANDLING
// Shows a message when form is submitted

// Get the form element
const contactForm = document.getElementById('contactForm');

// Add submit event listener
contactForm.addEventListener('submit', function(event) {
    // Prevent default form submission (which would reload the page)
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Get the message display element
    const formMessage = document.getElementById('formMessage');
    
    // Display success message
    formMessage.textContent = `Thanks ${name}! Your message has been received. I'll get back to you at ${email} soon!`;
    formMessage.classList.add('success');
    
    // In a real website, you would send this data to a server here
    // For now, we just console.log it
    console.log('Form submitted with:', { name, email, message });
    
    // Reset the form fields
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(function() {
        formMessage.style.display = 'none';
        formMessage.classList.remove('success');
    }, 5000);
});


// Scroll Animations
// To make elements fade in as you scroll

// Observe elements and add animation when they come into view
const observerOptions = {
    threshold: 0.1,  // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});