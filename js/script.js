document.addEventListener('DOMContentLoaded', () => {
    
    // --- Sticky Header Style Logic ---
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const mobileLinks = document.querySelectorAll('.nav-link');
    const toggleSpans = menuToggle.querySelectorAll('span');

    menuToggle.addEventListener('click', () => {
        const isActive = mainNav.classList.toggle('active');
        
        // Hamburglar to X animation
        if(isActive) {
            toggleSpans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            toggleSpans[1].style.transform = 'rotate(-45deg) translate(4px, -4px)';
            document.body.style.overflow = 'hidden';
        } else {
            toggleSpans[0].style.transform = 'none';
            toggleSpans[1].style.transform = 'none';
            document.body.style.overflow = '';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                toggleSpans[0].style.transform = 'none';
                toggleSpans[1].style.transform = 'none';
                document.body.style.overflow = '';
            }
        });
    });

    // --- Smooth Scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Offset for sticky header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Active Link highlighting on scroll ---
    const sections = document.querySelectorAll('section');
    const navLinksIter = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinksIter.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

});
