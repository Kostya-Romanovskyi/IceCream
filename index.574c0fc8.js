new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},simulateTouch:!1,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoheight:!0,spaceBetween:200}),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();const e=document.querySelector('[name="home"]'),t=document.querySelector('[name="how-it`s-made"]'),o=document.querySelector('[name="our-products"]'),n=document.querySelector('[name="contacts"]'),c=document.getElementById("header__mobile-wrapp"),d=document.querySelector("[data-menu-open]"),s=document.getElementById("modal-buy-now-open");var a;e.addEventListener("click",(function(){c.classList.remove("is-open"),d.classList.remove("is-open"),s.classList.remove("tablet__btn--none")})),t.addEventListener("click",(function(){c.classList.remove("is-open"),d.classList.remove("is-open"),s.classList.remove("tablet__btn--none")})),o.addEventListener("click",(function(){c.classList.remove("is-open"),d.classList.remove("is-open"),s.classList.remove("tablet__btn--none")})),n.addEventListener("click",(function(){c.classList.remove("is-open"),d.classList.remove("is-open"),s.classList.remove("tablet__btn--none")})),(()=>{const e=document.querySelector("[data-menu-open]"),t=document.querySelector(".tablet__btn");e.addEventListener("click",(()=>{e.classList.toggle("is-open"),t.classList.toggle("tablet__btn--none")}))})(),"function"!=typeof(a=window.Element.prototype).matches&&(a.matches=a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof a.closest&&(a.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),document.getElementById("modal-buy-now-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-buy-now-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-top-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-top-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-mid-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-mid-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-ingredients-bot-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-ingredients-bot-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-read-more-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-read-more-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-location-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-location-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("modal-franchise-open").addEventListener("click",(function(){document.body.classList.add("modal-open")})),document.getElementById("modal-franchise-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")})),document.getElementById("overlay-close").addEventListener("click",(function(){document.body.classList.remove("modal-open")}));
//# sourceMappingURL=index.574c0fc8.js.map
