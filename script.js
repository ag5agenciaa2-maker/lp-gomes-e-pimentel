document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Ícones Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Ano Atual no Rodapé
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Lógica do Smart Header (Menu Inteligente)
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > scrollThreshold) {
            header.classList.add('header-scrolled');

            if (currentScrollY > lastScrollY) {
                // Rolando para baixo -> Esconder
                header.classList.add('header-hidden');
            } else {
                // Rolando para cima -> Mostrar
                header.classList.remove('header-hidden');
            }
        } else {
            header.classList.remove('header-scrolled');
            header.classList.remove('header-hidden');
        }
        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
    }, { passive: true });

    // Menu Mobile - Drawer Logic (AG5 Standard)
    const drawerToggle = document.getElementById('drawer-toggle');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    const toggleDrawer = (open) => {
        if (open) {
            mobileDrawer.classList.add('active');
            drawerOverlay.classList.add('active');
            document.body.classList.add('no-scroll');
        } else {
            mobileDrawer.classList.remove('active');
            drawerOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    };

    if (drawerToggle && mobileDrawer) {
        drawerToggle.addEventListener('click', () => toggleDrawer(true));
        if (drawerClose) drawerClose.addEventListener('click', () => toggleDrawer(false));
        if (drawerOverlay) drawerOverlay.addEventListener('click', () => toggleDrawer(false));

        drawerLinks.forEach(link => {
            link.addEventListener('click', () => toggleDrawer(false));
        });
    }

    // FAQ Accordion
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const faqItem = toggle.closest('.faq-item');
            const faqContent = faqItem.querySelector('.faq-content');
            const chevron = toggle.querySelector('[data-lucide="chevron-down"], [data-lucide="chevron-up"]');

            // Fechar outros itens
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    const content = item.querySelector('.faq-content');
                    const otherChevron = item.querySelector('[data-lucide="chevron-up"]');
                    if (content) content.classList.add('hidden');
                    if (otherChevron) {
                        otherChevron.setAttribute('data-lucide', 'chevron-down');
                    }
                }
            });

            // Alternar item atual
            if (faqContent) {
                const isHidden = faqContent.classList.contains('hidden');
                if (isHidden) {
                    faqContent.classList.remove('hidden');
                    if (chevron) chevron.setAttribute('data-lucide', 'chevron-up');
                } else {
                    faqContent.classList.add('hidden');
                    if (chevron) chevron.setAttribute('data-lucide', 'chevron-down');
                }
            }
            lucide.createIcons();
        });
    });
});
