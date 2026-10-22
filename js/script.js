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

// 

const barraBusqueda = document.querySelector('.buscador');
let continenteSeleccionado = null;

function filtrarTarjetas(){
  const busqueda = barraBusqueda.value.toLowerCase();
  
  const viajesFiltrados = servicios.filter((servicio) =>{
    const coincideContinente = (continenteSeleccionado === null) || (servicio.continente.toLowerCase() === continenteSeleccionado.toLowerCase());
    const coincideBusqueda = (servicio.titulo.toLowerCase().includes(busqueda)) || (servicio.continente.toLowerCase().includes(busqueda));
    return coincideBusqueda && coincideContinente;
  })

  crearTarjetas(viajesFiltrados);
};

barraBusqueda.addEventListener('input', filtrarTarjetas);

botonEuropa.addEventListener('click', () =>{
  continenteSeleccionado = "Europa";
  filtrarTarjetas(continenteSeleccionado);
});

botonAfrica.addEventListener('click', () =>{
  continenteSeleccionado = "Africa";
  filtrarTarjetas(continenteSeleccionado);
});

botonAsia.addEventListener('click', () =>{
  continenteSeleccionado = "Asia";
  filtrarTarjetas(continenteSeleccionado);
});

botonOceania.addEventListener('click', () =>{
  continenteSeleccionado = "Oceania";
  filtrarTarjetas(continenteSeleccionado);
});

botonAmericaDelNorte.addEventListener('click', () =>{
  continenteSeleccionado = "America del Norte";
  filtrarTarjetas(continenteSeleccionado);
});

botonAmericaDelSur.addEventListener('click', () =>{
  continenteSeleccionado = "America del Sur";
  filtrarTarjetas(continenteSeleccionado);
});



//



//menu hamburguesa

const botonMenu = document.querySelector('.botonMenu');
const activo = document.querySelector('nav ul');

botonMenu.addEventListener('click', () =>{
  activo.classList.toggle('abierto')
})

