const fs = require("fs");
const path = require("path");

const directorioProyecto = [
  "../acsesorios",
  "../series",
  "../animales",
  "../astros",
  "../cocina",
  "../deportes",
  "../figuras geometricas",
  "../pokemon",
  "../casa",
  "../flowers",
  "../herramientas",
  "../acsesorios",
  "../it",
  "../iconos",
  "../dibujos",
  "../metodos de comunicacion",
  "../bandas",
  "../marcas autos",
  "../caballo",
  "../gatos",
  "../insectos",
  "../libreria",
  "../lugares",
  "../oficios",
  "../transporte",
  "..",
  "../consolas",
  "../juegoss mecanicos",
  "../juguetes",
  "../mascotas",
  "../comida",
  "../perros",
  "../",
];

function obtenerNombresDeArchivos(directorio) {
  const nombresDeArchivos = [];

  fs.readdirSync(directorio).forEach((archivo) => {
    const rutaCompleta = path.join(directorio, archivo);

    if (fs.statSync(rutaCompleta).isFile()) {
      nombresDeArchivos.push(archivo);
    }
  });

  return nombresDeArchivos;
}

const nombresDeImagenes = [];

directorioProyecto.forEach((directorio) => {
  const nombresEnDirectorio = obtenerNombresDeArchivos(directorio);
  nombresDeImagenes.push(...nombresEnDirectorio);
});

console.log(nombresDeImagenes, nombresDeImagenes.length);
