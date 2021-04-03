/*================== MOSTRAR MENU ===================*/

const mostrarMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validar si existe la variable
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('mostrar-menu')
        })
    }
};
mostrarMenu('nav-toggle','nav-menu');

/*==================== REMOVER EL MENU MOVIL ====================*/
const navLink = document.querySelectorAll('.nav-enlaces')

function linkAction(){
    navLink.forEach(n=>n.classList.remove('activo'));
    this.classList.add('activo');
  /*   remover el menu en responsive */
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('mostrar-menu')
    
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('seccion[id]');

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        Id = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + Id + ']').classList.add('activo')
        }else{
            document.querySelector('.nav-menu a[href*=' + Id + ']').classList.remove('activo')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);