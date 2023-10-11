const fs = require('fs');
const path = require('path');

const directorioProyecto = [
    
  './public/animales',
  './public/astros',
  './public/cocina',
  './public/deportes',
  './public/figuras geometricas',  
  './public/casa',
  './public/flowers',
  './public/herramientas',  
  './public/acsesorios',
  './public/it'  ,
  './public/iconos',
  './public/digujos',
  './public/metodos de comunicacion',
  './public/insectos',
  './public/libreria',
  './public/lugares',
  './public/oficios',
  './public/transporte',
  './public',
  './public/consolas',
  './public/juegoss mecanicos',
  './public/juguetes',
  './public/mascotas',
    './public/comida',
  './public/',
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

console.log(nombresDeImagenes , nombresDeImagenes.length);
