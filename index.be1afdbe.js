document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("body");e.addEventListener("contextmenu",function(e){e.preventDefault()});var t=function(t,n){var o=document.createElement("div");o.setAttribute("data-qa","notification"),o.textContent=t,o.className="notification","error"===n?o.classList.add("error"):o.classList.add("success"),e.appendChild(o)},n=new Promise(function(t,n){var o=setTimeout(function(){n(Error("First promise was rejected in 3 seconds if not clicked"))},3e3);e.addEventListener("click",function(){clearTimeout(o),t("First promise was resolved on a left click in the document")})}),o=new Promise(function(t){var n=function(o){(0===o.button||2===o.button)&&(t("Second promise was resolved"),e.removeEventListener("click",n),e.removeEventListener("contextmenu",n))};e.addEventListener("click",n),e.addEventListener("contextmenu",n)}),c=new Promise(function(t){var n=!1,o=!1,c=function(){n&&o&&(t("Third promise was resolved only after both left and right clicks happened"),e.removeEventListener("click",i),e.removeEventListener("contextmenu",r))},i=function(e){0===e.button&&(n=!0,c())},r=function(e){2===e.button&&(o=!0,c())};e.addEventListener("click",i),e.addEventListener("contextmenu",r)});n.then(function(e){t(e,"success")}).catch(function(e){t(e.message,"error")}),o.then(function(e){t(e,"success")}),c.then(function(e){t(e,"success")})});
//# sourceMappingURL=index.be1afdbe.js.map
