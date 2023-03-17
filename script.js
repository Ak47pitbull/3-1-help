window.onresize = function() {
    if (window.innerWidth < 600) {
      document.querySelector(".contenedor").style.maxWidth = "100%";
    } else {
      document.querySelector(".contenedor").style.maxWidth = "800px";
    }
  }
  const $form = document.getElementById("contactForm");
  const $buttonMailto = document.getElementById("trucazo");
  
  $form.addEventListener("submit", handleSubmit);
  
  function handleSubmit (event) {
      event.preventDefault();
      const form = new FormData(this);
      console.log(form.get("name"));
      $buttonMailto.setAttribute("href",`mailto:tobixx47@gmail.com?subject=${form.get("name")} ${form.get("email")}&body=${form.get("camp")}`);
      $buttonMailto.click();
  }