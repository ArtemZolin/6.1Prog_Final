!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9)},function(e,t,n){},function(e,t){var n=document.querySelector(".brands__button"),o=document.querySelector(".services-software"),i=document.querySelector(".brands__button__text"),r=document.querySelector(".brands-list"),c=document.querySelector(".brands__button__style");n.onclick=function(){"Показать все"==i.textContent?(i.textContent="Скрыть",r.style.height="auto",o.style.height="auto",r.style.paddingBottom="20px",c.style.transform="rotate(180deg)"):(i.textContent="Показать все",r.style.height="180px",o.style.height="322px",r.style.paddingBottom="0px",c.style.transform="rotate(0deg)")};var s,l=document.querySelector(".swiper");function d(){window.innerWidth<768&&"false"==l.dataset.mobile&&(s=new Swiper(l,{direction:"horizontal",slidesOffsetBefore:16,loop:!0,spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:" true"}}),l.dataset.mobile="true"),window.innerWidth>=768&&(l.dataset.mobile="false",l.classList.contains("swiper-initialized")&&s.destroy(!0,!0))}d(),window.addEventListener("resize",(function(){d()}))},function(e,t){var n=document.querySelector(".repair-button"),o=document.querySelector(".repair-equipment"),i=document.querySelector(".repair-button__text"),r=document.querySelector(".repair-list"),c=document.querySelector(".repair-button-style");n.onclick=function(){"Показать все"==i.textContent?(i.textContent="Скрыть",r.style.height="auto",o.style.height="auto",r.style.paddingBottom="20px",c.style.transform="rotate(180deg)"):(i.textContent="Показать все",r.style.height="180px",o.style.height="322px",r.style.paddingBottom="0px",c.style.transform="rotate(0deg)")};var s,l=document.querySelector(".swiper-repair");function d(){window.innerWidth<768&&"false"==l.dataset.mobile2&&(s=new Swiper(l,{direction:"horizontal",slidesOffsetBefore:16,loop:!0,spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:" true"}}),l.dataset.mobile2="true"),window.innerWidth>=768&&(l.dataset.mobile2="false",l.classList.contains("swiper-initialized")&&s.destroy(!0,!0))}d(),window.addEventListener("resize",(function(){d()}))},function(e,t){var n,o=document.querySelector(".swiper-services");function i(){window.innerWidth<768&&"false"==o.dataset.mobile3&&(n=new Swiper(o,{direction:"horizontal",slidesOffsetBefore:16,loop:!0,spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:" true"}}),o.dataset.mobile2="true"),window.innerWidth>=768&&(o.dataset.mobile2="false",o.classList.contains("swiper-initialized")&&n.destroy(!0,!0))}i(),window.addEventListener("resize",(function(){i()}))},function(e,t){var n=document.querySelector(".block-1-button-read"),o=(document.querySelector(".block-1__box"),document.querySelector(".block-1-button-read__text")),i=document.querySelector(".block-1__text"),r=document.querySelector(".block-1-button-read__style");n.onclick=function(){"Читать далее"==o.textContent?(o.textContent="Скрыть",i.style.height="auto",i.style.paddingBottom="20px",r.style.transform="rotate(180deg)"):(o.textContent="Читать далее",i.style.height="170px",i.style.paddingBottom="0px",r.style.transform="rotate(0deg)")}},function(e,t){var n=document.querySelector(".left-menu"),o=document.querySelectorAll(".round-icon-list-left-burger"),i=n.querySelectorAll(".buttons-cross"),r=document.querySelector(".non"),c=document.querySelector(".right-menu-call"),s=document.querySelector(".right-menu-feedback");r.onclick=function(){r.classList.contains("non-hidden")?(n.classList.remove("left-menu-hidden"),r.classList.remove("non-hidden")):(n.classList.add("left-menu-hidden"),r.classList.add("non-hidden"),c.classList.add("right-menu-call-hidden"),s.classList.add("right-menu-feedback-hidden"))};var l=function(){n.classList.contains("left-menu-hidden")?(n.classList.remove("left-menu-hidden"),r.classList.remove("non-hidden")):(n.classList.add("left-menu-hidden"),r.classList.add("non-hidden"))};o[0].onclick=l,i[0].onclick=l},function(e,t){var n=document.querySelector(".right-menu-feedback"),o=document.querySelectorAll(".round-icon-chat"),i=n.querySelectorAll(".buttons-cross"),r=document.querySelector(".non"),c=function(){n.classList.contains("right-menu-feedback-hidden")?(n.classList.remove("right-menu-feedback-hidden"),r.classList.remove("non-hidden")):(n.classList.add("right-menu-feedback-hidden"),r.classList.add("non-hidden"))};o[0].onclick=c,o[1].onclick=c,i[0].onclick=c},function(e,t){var n=document.querySelectorAll(".round-icon-call"),o=document.querySelector(".right-menu-call"),i=o.querySelectorAll(".buttons-cross"),r=document.querySelector(".non"),c=function(){o.classList.contains("right-menu-call-hidden")?(o.classList.remove("right-menu-call-hidden"),r.classList.remove("non-hidden")):(o.classList.add("right-menu-call-hidden"),r.classList.add("non-hidden"))};n[0].onclick=c,n[1].onclick=c,i[0].onclick=c}]);
//# sourceMappingURL=bundle.js.map