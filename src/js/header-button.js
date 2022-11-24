(() => {
    const menuBtnRef = document.querySelector("[data-menu-open]");


    menuBtnRef.addEventListener("click", () => {

        menuBtnRef.classList.toggle("is-open");

    });


})();