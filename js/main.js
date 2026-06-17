/* ========================================
   LAVADERO HUMBERTO E HIJOS - SCRIPTS
   ======================================== */

(function() {
    'use strict';

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);

    // ===== MOBILE MENU =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-links a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // ===== SCROLL REVEAL =====
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function(el) {
        revealObserver.observe(el);
    });

    // ===== WHATSAPP FORM =====
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const marca = document.getElementById('marca').value.trim();
            const modelo = document.getElementById('modelo').value.trim();
            const tipoLavado = document.getElementById('tipoLavado').value;
            const fechaHora = document.getElementById('fechaHora').value;
            const comentarios = document.getElementById('comentarios').value.trim();

            // Build WhatsApp message
            let mensaje = '*Nueva reserva - Lavadero Humberto e Hijos*\n\n';
            mensaje += '*Nombre:* ' + nombre + '\n';
            mensaje += '*Telefono:* ' + telefono + '\n';
            mensaje += '*Vehiculo:* ' + marca + ' ' + modelo + '\n';
            mensaje += '*Servicio:* ' + tipoLavado + '\n';

            if (fechaHora) {
                mensaje += '*Fecha preferida:* ' + fechaHora + '\n';
            }

            if (comentarios) {
                mensaje += '*Comentarios:* ' + comentarios + '\n';
            }

            mensaje += '\nGracias! Espero su confirmacion.';

            const whatsappUrl = 'https://wa.me/34659772833?text=' + encodeURIComponent(mensaje);
            window.open(whatsappUrl, '_blank');
        });
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

    function highlightNavOnScroll() {
        const scrollPos = window.scrollY + navbar.offsetHeight + 100;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navItems.forEach(function(item) {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === '#' + sectionId) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // ===== SET MIN DATE FOR DATETIME INPUT =====
    const fechaHoraInput = document.getElementById('fechaHora');
    if (fechaHoraInput) {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        fechaHoraInput.min = now.toISOString().slice(0, 16);
    }

    // ===== LAZY LOAD IMAGES =====
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    }

})();
