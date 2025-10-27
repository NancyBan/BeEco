// Cargar dinámicamente las secciones desde archivos separados
document.addEventListener("DOMContentLoaded", () => {
  const secciones = ["home", "tiendas", "blog"];

  secciones.forEach(nombre => {
    fetch(`secciones/${nombre}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById(nombre).innerHTML = html;
      })
      .catch(err => console.error(`Error cargando ${nombre}:`, err));
  });
});

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
