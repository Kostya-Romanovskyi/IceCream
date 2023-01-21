(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

const home = document.querySelector('[name="home"]');
const howItMade = document.querySelector('[name="how-it`s-made"]');
const ourProducts = document.querySelector('[name="our-products"]');
const contacts = document.querySelector('[name="contacts"]');
const wrap = document.getElementById('header__mobile-wrapp');
const btnMenuOpen = document.querySelector('[data-menu-open]');
const mainBtn = document.getElementById('modal-buy-now-open');

home.addEventListener('click', onRemoveListHome);
howItMade.addEventListener('click', onRemoveListMade);
ourProducts.addEventListener('click', onRemoveListProducts);
contacts.addEventListener('click', onRemoveListContacts);

function onRemoveListHome() {
  wrap.classList.remove('is-open');
  btnMenuOpen.classList.remove('is-open');
  mainBtn.classList.remove('tablet__btn--none');
}
function onRemoveListMade() {
  wrap.classList.remove('is-open');
  btnMenuOpen.classList.remove('is-open');
  mainBtn.classList.remove('tablet__btn--none');
}
function onRemoveListProducts() {
  wrap.classList.remove('is-open');
  btnMenuOpen.classList.remove('is-open');
  mainBtn.classList.remove('tablet__btn--none');
}
function onRemoveListContacts() {
  wrap.classList.remove('is-open');
  btnMenuOpen.classList.remove('is-open');
  mainBtn.classList.remove('tablet__btn--none');
}
