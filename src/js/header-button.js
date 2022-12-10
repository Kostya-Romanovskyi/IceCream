(() => {
  const menuBtnRef = document.querySelector('[data-menu-open]');
  const tabletBtnRef = document.querySelector('.tablet__btn');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    tabletBtnRef.classList.toggle('tablet__btn--none');
  });
})();
