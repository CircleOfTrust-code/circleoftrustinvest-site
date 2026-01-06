(function(){
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mobileNav");
  if (btn && nav){
    btn.addEventListener("click", () => {
      const open = !nav.hasAttribute("hidden");
      if (open){
        nav.setAttribute("hidden","");
        btn.setAttribute("aria-expanded","false");
      } else {
        nav.removeAttribute("hidden");
        btn.setAttribute("aria-expanded","true");
      }
    });
  }
})();

function handleSubmit(e){
  e.preventDefault();
  const note = document.getElementById("formNote");
  if (note) note.textContent = "Bedankt! (Demo) Koppel dit formulier aan Formspree, Netlify Forms of je CRM.";
  e.target.reset();
  return false;
}
