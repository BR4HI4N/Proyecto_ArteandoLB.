//menu ham//

const ham = document.querySelector(".ham");

const nav = document.querySelector(".nav__ul");

const barras = document.querySelectorAll(".ham span")

ham.addEventListener('click', () => {
	nav.classList.toggle(`activado`);
	barras.forEach(child => {child.classList.toggle(`animado`)})
});



//enviar contacto

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event){
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_zsj1q1u';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje enviado correctamente!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});

