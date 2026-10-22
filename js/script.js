const servicios = [
  {
    imagen: "img/viaje-01.jpg",
    titulo: "Viaje a Japon",
    continente: "Asia",
    descripcion: "Descubre templos tradicionales, ciudades modernas y paisajes inolvidables.",
    textoBoton: "Ver viaje",
    precio: 1800
  },
  {
    imagen: "img/viaje-02.jpg",
    titulo: "Viaje a Italia",
    continente: "Europa",
    descripcion: "Recorre ciudades llenas de historia y disfruta de la gastronomia italiana.",
    textoBoton: "Ver viaje",
    precio: 1200
  },
  {
    imagen: "img/viaje-03.jpg",
    titulo: "Viaje a Marruecos",
    continente: "Africa",
    descripcion: "Explora zocos, desiertos y pueblos con una cultura fascinante.",
    textoBoton: "Ver viaje",
    precio: 950
  },
  {
    imagen: "img/viaje-04.jpg",
    titulo: "Viaje a Peru",
    continente: "America del Sur",
    descripcion: "Visita Machu Picchu y descubre los paisajes de los Andes.",
    textoBoton: "Ver viaje",
    precio: 1500
  },
  {
    imagen: "img/viaje-05.jpg",
    titulo: "Viaje a Australia",
    continente: "Oceania",
    descripcion: "Conoce la Gran Barrera de Coral y la naturaleza unica de Australia.",
    textoBoton: "Ver viaje",
    precio: 2400
  },
  {
    imagen: "img/viaje-06.jpg",
    titulo: "Viaje a Grecia",
    continente: "Europa",
    descripcion: "Disfruta de islas, playas y antiguos monumentos junto al Mediterraneo.",
    textoBoton: "Ver viaje",
    precio: 1350
  },
  {
    imagen: "img/viaje-07.jpg",
    titulo: "Viaje a Kenia",
    continente: "Africa",
    descripcion: "Vive un safari entre grandes paisajes y fauna salvaje.",
    textoBoton: "Ver viaje",
    precio: 2100
  },
  {
    imagen: "img/viaje-08.jpg",
    titulo: "Viaje a Mexico",
    continente: "America del Norte",
    descripcion: "Explora ciudades coloniales, playas y sitios arqueologicos mayas.",
    textoBoton: "Ver viaje",
    precio: 1100
  },
  {
    imagen: "img/viaje-09.jpg",
    titulo: "Viaje a Tailandia",
    continente: "Asia",
    descripcion: "Descubre templos, mercados y playas tropicales.",
    textoBoton: "Ver viaje",
    precio: 1600
  },
  {
    imagen: "img/viaje-10.jpg",
    titulo: "Viaje a Nueva Zelanda",
    continente: "Oceania",
    descripcion: "Recorre montanas, lagos y escenarios naturales espectaculares.",
    textoBoton: "Ver viaje",
    precio: 2300
  }
];

const continentes = [
  { nombre: "Europa", clase: "botonEuropa" },
  { nombre: "Africa", clase: "botonAfrica" },
  { nombre: "Asia", clase: "botonAsia" },
  { nombre: "America del Norte", clase: "botonAmericaDelNorte" },
  { nombre: "America del Sur", clase: "botonAmericaDelSur" },
  { nombre: "Oceania", clase: "botonOceania" }
];

const seccionBotones = document.querySelector('.botones')

function crearBotones(arrayBotones){
  seccionBotones.innerHTML = "";

  arrayBotones.forEach(element =>{
    const boton = document.createElement('button');
    boton.textContent = element.nombre;
    boton.classList.add(element.clase);
    seccionBotones.appendChild(boton)
  })
}

crearBotones(continentes);

const botonEuropa = document.querySelector('.botonEuropa');
const botonAfrica = document.querySelector('.botonAfrica');
const botonAsia = document.querySelector('.botonAsia');
const botonAmericaDelNorte = document.querySelector('.botonAmericaDelNorte');
const botonAmericaDelSur = document.querySelector('.botonAmericaDelSur');
const botonOceania = document.querySelector('.botonOceania');

const buscador = document.querySelector('.buscador');

const sectionTarjetas = document.querySelector('.tarjetas');

function crearTarjetas(productos){
  sectionTarjetas.innerHTML = "";

  productos.forEach(element => {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('producto');

    tarjeta.innerHTML = `
      <img src="${element.imagen}" alt="${element.titulo}">
      <h3>${element.titulo}</h3>
      <h6>${element.continente}</h6>
      <p>${element.descripcion}</p>
      <p>Precio: ${element.precio} $</p>
      <div><button>${element.textoBoton}</button></div>
    
    `
    sectionTarjetas.appendChild(tarjeta)
  });
}

crearTarjetas(servicios);

const viajesEuropa = servicios.filter((servicio) => servicio.continente.toLowerCase() === "europa");
botonEuropa.addEventListener('click', () =>{
    crearTarjetas(viajesEuropa);
});

const viajesAmericaDelNorte = servicios.filter((servicio) => servicio.continente.toLowerCase() === "america del norte");
botonAmericaDelNorte.addEventListener('click', () =>{
  crearTarjetas(viajesAmericaDelNorte)
});

const viajesAmericaDelSur = servicios.filter((servicio) => servicio.continente.toLowerCase() === "america del sur");
botonAmericaDelSur.addEventListener('click', () =>{
  crearTarjetas(viajesAmericaDelSur)
});
const viajesAsia = servicios.filter((servicio) => servicio.continente.toLowerCase() === "asia");
botonAsia.addEventListener('click', () =>{
    crearTarjetas(viajesAsia)
});

const viajesAfrica = servicios.filter((servicio) => servicio.continente.toLowerCase()=== "africa");
botonAfrica.addEventListener('click', () =>{
  crearTarjetas(viajesAfrica)
});

const viajesOceania = servicios.filter((servicio) => servicio.continente.toLowerCase() === "oceania");
botonOceania.addEventListener('click', () =>{
  crearTarjetas(viajesOceania)
});

// 
const barraBusqueda = document.querySelector('.buscador');

barraBusqueda.addEventListener('input', () => {
  const contenido = barraBusqueda.value.trim().toLowerCase();

  const filtroBusqueda = servicios.filter((servicio) =>
    servicio.titulo.toLowerCase().includes(contenido) ||
    servicio.continente.toLowerCase().includes(contenido)
  );

  crearTarjetas(filtroBusqueda);
});
//


// //
// const botonOrden = document.querySelector('.botonOrden');
// const divOrdenes = document.querySelector('.divOrdenes');

// botonOrden.addEventListener('click', () =>{
//   divOrdenes.classList.toggle('divOrdenesabierto')
// });

// //
// const botonMayorAMenor = document.querySelector('.precioAsc');
// const botonMenorAMayor = document.querySelector('.precioDesc');
// const botonTotal = document.querySelector('.total');

// let precios = [];

// botonMayorAMenor.addEventListener('click', () =>{
//     precios = [...servicios].sort((a,b) => b.precio - a.precio);
//     crearTarjetas(precios);
// });

// botonMenorAMayor.addEventListener('click', () =>{
//     precios = [...servicios].sort((a,b) => a.precio - b.precio);
//     crearTarjetas(precios);
// });

// botonTotal.addEventListener('click', () =>{
//     crearTarjetas(servicios);
// })


const botonMenu = document.querySelector('.material-symbols.outlined');
const activo = document.querySelector('.nav ul')

botonMenu.addEventListener('click', () =>{
  activo.classList.toggle('.abierto')
})


