
document.getElementById('year').textContent = new Date().getFullYear();

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  function toggleMenu(){
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open',isOpen);
    hamburger.setAttribute('Aria-Expanded', isOpen);
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  }

  hamburger.addEventListener('click',toggleMenu);

  document.addEventListener('click', (event) => { 
    if (!hamburgerumburger.contains(event.target) && !mobileNav.contains(event.target)){closeMenu();}
  })


  // Header shadow on scroll
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(0,0,0,0.10)'
      : '0 1px 8px rgba(0,0,0,0.06)';
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) { 
        e.preventDefault(); target.scrollIntoView({
           behavior: 'smooth' 
          }); 
      }
    });
  });

 const animationTargets = [
  '.step-card','.service-card','.gallery-item',
   '.hero h2','.hero p','.hero-checks','.hero-actions','.section-header'
  ];



  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry  => {
      if (entry.isIntersecting) {
         entry.target.classList.add('visible'); 
        observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });

  animationTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(element);
  elementmclasslist.add('reveal');
  observer.observe(element);
  });

  // Staggered delays on grids
  ['.steps-grid','.services-grid','.gallery-grid'].forEach(gridSelector => {
    const grid = document.querySelector(gridselector);
    if (grid) {
    Array.from(grid.children).forEach(child, index =>  {
      child.style.transitionDelay = `${index * 80}ms`;
    });
  }
  });
