// Function to get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to personalize the invitation message
function personalizeInvitation() {
    const guestName = getURLParameter('name');
    const invitationElement = document.getElementById('invitationMessage');
    
    if (guestName && invitationElement) {
        const decodedName = decodeURIComponent(guestName);
        invitationElement.innerHTML = `
            <p><strong>${decodedName}</strong>, you are invited to</p>
            <p>Rohan and Neha's Wedding!</p>
        `;
    }
}

// Function to handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.slide-up, .zoom-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Function for smooth scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Floating hearts animation (optional enhancement)
function createFloatingHearts() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '0';
        hero.appendChild(heart);
        
        // Animate the heart
        let bottom = -50;
        let opacity = parseFloat(heart.style.opacity);
        const animationInterval = setInterval(() => {
            bottom += 2;
            opacity -= 0.01;
            heart.style.bottom = bottom + 'px';
            heart.style.opacity = opacity;
            
            if (bottom > window.innerHeight || opacity <= 0) {
                clearInterval(animationInterval);
                heart.remove();
            }
        }, 50);
    }, 3000);
}

// Countdown timer (optional)
function initCountdown() {
    const weddingDate = new Date('2024-12-15T15:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // You can add a countdown display element in HTML if needed
            console.log(`${days}d ${hours}h ${minutes}m ${seconds}s until the wedding!`);
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Add sparkle effect on mouse move
function initSparkleEffect() {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) { // Only create sparkles occasionally
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.width = '5px';
            sparkle.style.height = '5px';
            sparkle.style.background = 'gold';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.animation = 'sparkle 1s ease-out';
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }
    });
    
    // Add sparkle animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: scale(0);
            }
            50% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    personalizeInvitation();
    handleScrollAnimations();
    initSmoothScroll();
    createFloatingHearts();
    initCountdown();
    initSparkleEffect();
    
    // Add a welcome message to console
    console.log('🎉 Welcome to Rohan & Neha\'s Wedding Website! 🎉');
    console.log('💑 We\'re so excited to celebrate with you! 💑');
});

// Add page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
