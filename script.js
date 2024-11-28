
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.navlist');


hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});


const navLinks = document.querySelectorAll('.nav-links');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});


const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 80, 
            behavior: 'smooth' 
        });
    });
});
