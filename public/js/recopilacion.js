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
  "../sonic",
  "../caballo",
  "../gatos",
  "../insectos",
  "../libreria",
  "../lugares",
  "../oficios",
  "../transporte",
  "../futbol",
  "../consolas",
  "../juegoss mecanicos",
  "../juguetes",
  "../mascotas",
  "../comida",
  "../perros",
  "../basquet",
  "../tenis",
  ".."
];

function obtenerNombresDeArchivos(directorio) {
  const nombresDeArchivos = [];

  fs.readdirSync(directorio).forEach((archivo) => {
    const rutaCompleta = path.join(directorio, archivo);

    if (fs.statSync(rutaCompleta).isFile()) {
      nombresDeArchivos.push(`"${rutaCompleta}"
      `);
    }
  });

  return nombresDeArchivos;
}

const nombresDeImagenes = [];

directorioProyecto.forEach((directorio) => {
  const nombresEnDirectorio = obtenerNombresDeArchivos(directorio);
  nombresDeImagenes.push(nombresEnDirectorio);
});

nombresDeImagenes.map((nombre)=>console.log(`${nombre},`));
