/**
 * DEMOSAICA - Toolkit Landing
 */

// Acordeón FAQ
function initAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const isExpanded = header.getAttribute('aria-expanded') === 'true';
            const content = header.nextElementSibling;
            
            // Cerrar otros
            document.querySelectorAll('.accordion-header').forEach(h => {
                if (h !== header) {
                    h.setAttribute('aria-expanded', 'false');
                    h.nextElementSibling.hidden = true;
                }
            });
            
            // Toggle actual
            header.setAttribute('aria-expanded', !isExpanded);
            content.hidden = isExpanded;
        });
    });
}

// Validación formulario
function initFormValidation() {
    const form = document.getElementById('toolkit-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('📦 Solicitud DEMOSAICA:', data);
        
        document.getElementById('form-success').style.display = 'block';
        form.style.display = 'none';
    });
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🎨 DEMOSAICA Landing', 'color: #e2564d; font-weight: bold;');
    initAccordion();
    initFormValidation();
    initSmoothScroll();
});
