document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon between bars and times
            const icon = mobileMenu.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.replace('fa-times', 'fa-bars');
            });
        });
    }

    // Lead Capture Popup Logic
    const popup = document.getElementById('lead-popup');
    const closeBtn = document.getElementById('close-popup');

    if (popup && closeBtn) {
        const cooldownTime = 5 * 60 * 1000; // 5 minutes in ms

        const showPopup = () => {
            const lastShown = localStorage.getItem('popupLastShown');
            const now = Date.now();

            if (!lastShown || (now - lastShown > cooldownTime)) {
                popup.classList.add('active');
            }
        };

        // Show after 15 seconds
        setTimeout(showPopup, 15000);

        closeBtn.addEventListener('click', () => {
            popup.classList.remove('active');
            localStorage.setItem('popupLastShown', Date.now());
        });

        // Close on overlay click
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('active');
                localStorage.setItem('popupLastShown', Date.now());
            }
        });
    }
});
