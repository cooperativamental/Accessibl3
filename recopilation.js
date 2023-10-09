const fs = require('fs');
const path = require('path');

const directorioProyecto = [
  '../Accessibl3/public/images/animales',
  '../Accessibl3/public/images/astros',
  '../Accessibl3/public/images/cocina',
  '../Accessibl3/public/images/deportes',
  '../Accessibl3/public/images/figuras geometricas',  
  '../Accessibl3/public/images/casa',
  '../Accessibl3/public/images/flowers',
  '../Accessibl3/public/images/herramientas',  
  '../Accessibl3/public/images/acsesorios',
  '../Accessibl3/public/images/it'  ,
  '../Accessibl3/public/images/iconos',
  '../Accessibl3/public/images/digujos',
  '../Accessibl3/public/images/metodos de comunicacion',
  '../Accessibl3/public/images/insectos',
  '../Accessibl3/public/images/libreria',
  '../Accessibl3/public/images/lugares',
  '../Accessibl3/public/images/oficios',
  '../Accessibl3/public/images/transporte',
  '../Accessibl3/public/images',
  '../Accessibl3/public/images/consolas',
  '../Accessibl3/public/images/juegoss mecanicos',
  '../Accessibl3/public/images/juguetes',
  '../Accessibl3/public/images/mascotas',
    '../Accessibl3/public/images/comida',
  '../Accessibl3/public/images/',
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
