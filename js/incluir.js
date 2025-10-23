// Cargar dinámicamente las secciones desde archivos separados
document.addEventListener("DOMContentLoaded", () => {
  const secciones = ["home", "tienda", "blog"];

  secciones.forEach(nombre => {
    fetch(`secciones/${nombre}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById(nombre).innerHTML = html;
      })
      .catch(err => console.error(`Error cargando ${nombre}:`, err));
  });
});
