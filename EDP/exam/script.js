document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header
    const header = document.querySelector('.header-area');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // 2. Mobile Menu
    const menuTrigger = document.querySelector('.menu-trigger');
    const nav = document.querySelector('.nav');
    if (menuTrigger) {
        menuTrigger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // 3. Simple Slider (Replaces Owl Carousel)
    const initSlider = (sliderId, itemsToShow = 3) => {
        const container = document.getElementById(sliderId);
        if (!container) return;

        const wrapper = container.querySelector('.slider-wrapper');
        const items = container.querySelectorAll('.slider-item');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');

        let currentIndex = 0;

        // Responsive adjustments
        const updateItemsToShow = () => {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 992) return 2;
            return itemsToShow;
        };

        const slide = () => {
            const showCount = updateItemsToShow();
            const itemWidth = 100 / showCount;
            wrapper.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
        };

        nextBtn.addEventListener('click', () => {
            const showCount = updateItemsToShow();
            if (currentIndex < items.length - showCount) {
                currentIndex++;
                slide();
            } else {
                currentIndex = 0; // Loop back
                slide();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                slide();
            }
        });

        // Auto play
        setInterval(() => {
            const showCount = updateItemsToShow();
            if (currentIndex < items.length - showCount) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            slide();
        }, 4000);

        window.addEventListener('resize', slide);
    };

    initSlider('services-slider', 3);
    initSlider('courses-slider', 4);

    // 4. Accordions
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        const head = acc.querySelector('.accordion-head');
        const body = acc.querySelector('.accordion-body');

        // Open default
        if (acc.closest('.accordions').classList.contains('is-first-expanded') && acc === accordions[0]) {
            acc.classList.add('is-open');
            body.style.height = body.scrollHeight + 'px';
        }

        head.addEventListener('click', () => {
            // Close others
            accordions.forEach(other => {
                if (other !== acc) {
                    other.classList.remove('is-open');
                    other.querySelector('.accordion-body').style.height = 0;
                }
            });

            acc.classList.toggle('is-open');
            if (acc.classList.contains('is-open')) {
                body.style.height = body.scrollHeight + 'px';
            } else {
                body.style.height = 0;
            }
        });
    });

    // 5. Meeting Filter
    const filterBtns = document.querySelectorAll('.filter-menu li');
    const gridItems = document.querySelectorAll('.grid-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            gridItems.forEach(item => {
                if (filter === '*' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.transition = 'all 0.4s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 6. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for sticky header
                    behavior: 'smooth'
                });
                nav.classList.remove('active'); // Close mobile menu
            }
        });
    });

    // 7. Counter Animation (Facts Section)
    const counters = document.querySelectorAll('.count-digit');
    let counted = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count');
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // ~60fps
            let current = 0;

            const updateCount = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target;
                }
            };
            updateCount();
        });
    };

    // Use IntersectionObserver to trigger counting when section is visible
    const factsSection = document.querySelector('.our-facts');
    if (factsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) {
                    counted = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(factsSection);
    }

});