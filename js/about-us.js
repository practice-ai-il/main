// About Us Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Disable AOS completely
    AOS.init({
        disable: true
    });

    // Basic scroll handling
    const floatingCta = document.getElementById('floatingCta');
    const heroSection = document.querySelector('.hero-section');
    
    function handleFloatingCta() {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition > heroBottom + 200) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }
    }

    // Simple scroll function
    function smoothScroll(target) {
        const targetElement = document.querySelector(target);
        if (!targetElement) return;
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    // Global scroll to form function
    window.scrollToForm = function() {
        smoothScroll('#contact-form');
    };

    // Basic scroll event listener
    window.addEventListener('scroll', handleFloatingCta, { passive: true });

    // Contact Form Functions
    window.openContactForm = function() {
        const modal = document.getElementById('contactModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        const firstInput = modal.querySelector('input');
        if (firstInput) firstInput.focus();
    };

    window.closeContactForm = function() {
        const modal = document.getElementById('contactModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        const form = document.getElementById('contactForm');
        if (form) {
            form.reset();
            resetSubmitButton();
        }
    };

    // Basic event listeners
    document.addEventListener('click', function(e) {
        if (e.target.id === 'contactModal') {
            closeContactForm();
        }
    }, { passive: true });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeContactForm();
        }
    }, { passive: true });

    // Form submission
    function handleFormSubmission() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const formData = new FormData(form);
            
            // Basic validation
            const requiredFields = Array.from(form.querySelectorAll('[required]'));
            const email = formData.get('email');
            const phone = formData.get('phone');
            
            const isValid = requiredFields.every(field => {
                const valid = field.value.trim() !== '';
                field.style.borderColor = valid ? '#E5E7EB' : '#EF4444';
                return valid;
            });
            
            if (!isValid) {
                showNotification('אנא מלאו את כל השדות הנדרשים', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                form.querySelector('#email').style.borderColor = '#EF4444';
                showNotification('אנא הזינו כתובת אימייל תקינה', 'error');
                return;
            }

            // Phone validation
            const phoneRegex = /^[\d\-\+\(\)\s]+$/;
            if (!phoneRegex.test(phone)) {
                form.querySelector('#phone').style.borderColor = '#EF4444';
                showNotification('אנא הזינו מספר טלפון תקין', 'error');
                return;
            }
            
            setSubmitButtonState(submitBtn, 'loading');
            
            try {
                // Get utm_source from URL parameters, default to 'about-us-page'
                const urlParams = new URLSearchParams(window.location.search);
                const utmSource = urlParams.get('utm_source') || 'about-us-page';
                
                const webhookData = {
                    name: formData.get('fullName'),
                    email: email,
                    phone: phone,
                    company: formData.get('company') || '',
                    message: formData.get('message') || '',
                    timestamp: new Date().toISOString(),
                    source: utmSource
                };
                
                const response = await fetch('https://hook.eu2.make.com/85vc29oday7uilf4iuwkm4i4muejmspn', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(webhookData)
                });
                
                if (response.ok) {
                    setSubmitButtonState(submitBtn, 'success');
                    showNotification('תודה! קיבלנו את הפרטים ונחזור אליכם תוך 24 שעות', 'success');
                    setTimeout(closeContactForm, 2000);
                } else {
                    throw new Error('Network response was not ok');
                }
                
            } catch (error) {
                console.error('Form submission error:', error);
                setSubmitButtonState(submitBtn, 'error');
                showNotification('אירעה שגיאה בשליחת הטופס. אנא נסו שוב או צרו קשר ישירות', 'error');
                setTimeout(resetSubmitButton, 3000);
            }
        });
    }

    // Button state management
    function setSubmitButtonState(button, state) {
        button.classList.remove('loading', 'success', 'error');
        button.classList.add(state);
    }

    function resetSubmitButton() {
        const submitBtn = document.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.classList.remove('loading', 'success', 'error');
        }
    }

    // Simple notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Initialize form handling
    handleFormSubmission();

    // Update scrollToForm to also open modal
    const originalScrollToForm = window.scrollToForm;
    window.scrollToForm = function() {
        openContactForm();
    };

    // Add basic error handling for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Export functions for global use
window.aboutUsUtils = {
    scrollToForm: window.scrollToForm
}; 