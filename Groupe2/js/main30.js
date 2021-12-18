const nav = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
});
const btn = document.querySelector('.btn1');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})