const  btn = document.querySelector('.section-container3__content1-img');
const links = document.querySelector('.section-container3__content3');

btn.addEventListener('click', () =>{
   links.classList.toggle('show');
});