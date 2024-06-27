const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('navbar-menu');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



// class MobileMenu {
//     constructor(mobile__menu, menu__list, nav__links) {
//         this.mobile__menu = document.querySelector(mobile__menu);
//         this.menu__list = document.querySelector(menu__list); 
//         this.nav__links = document.querySelectorAll(nav__links);
//         this.activeClass = "active";
//         this.handleClick = this.handleClick.bind(this);
//     }

//     animateLinks() {
//         this.nav__links.forEach((link, index) => {
//           link.style.animation
//             ? (link.style.animation = "")
//             : (link.style.animation = `nav__linksFade 0.5s ease forwards ${
//                 index / 7 + 0.3
//               }s`);
//         });
//       }

//     handleClick() {
//         this.menu__list.classList.toggle(this.activeClass);
//         this.mobile__menu.classList.toggle(this.activeClass);
//         this.animateLinks();
//       }

//     addClickEvent() {
//         this.mobile__menu.addEventListener("click", this.handleClick);
//     }

//     init() {
//         if (this.mobile__menu) {
//             this.addClickEvent();
//         }
//         return this;
//     }
// }

// const mobileNavbar = new MobileNavbar(
//     ".mobile__menu",
//     ".menu__list",
//     ".menu__list li",
//   );
//   mobileNavbar.init();














// document.getElementById('menuToggle').addEventListener('click', function() {
//     var menuList = document.getElementById('menuList');
//     menuList.classList.toggle('show');
// });
