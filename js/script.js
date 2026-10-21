const servicios = [
  {
    img: "img/viaje-01.jpg",
    h3: "Viaje a Japon",
    h6: "Asia",
    p: "Descubre templos tradicionales, ciudades modernas y paisajes inolvidables.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-02.jpg",
    h3: "Viaje a Italia",
    h6: "Europa",
    p: "Recorre ciudades llenas de historia y disfruta de la gastronomia italiana.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-03.jpg",
    h3: "Viaje a Marruecos",
    h6: "Africa",
    p: "Explora zocos, desiertos y pueblos con una cultura fascinante.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-04.jpg",
    h3: "Viaje a Peru",
    h6: "America del Sur",
    p: "Visita Machu Picchu y descubre los paisajes de los Andes.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-05.jpg",
    h3: "Viaje a Australia",
    h6: "Oceania",
    p: "Conoce la Gran Barrera de Coral y la naturaleza unica de Australia.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-06.jpg",
    h3: "Viaje a Grecia",
    h6: "Europa",
    p: "Disfruta de islas, playas y antiguos monumentos junto al Mediterraneo.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-07.jpg",
    h3: "Viaje a Kenia",
    h6: "Africa",
    p: "Vive un safari entre grandes paisajes y fauna salvaje.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-08.jpg",
    h3: "Viaje a Mexico",
    h6: "America del Norte",
    p: "Explora ciudades coloniales, playas y sitios arqueologicos mayas.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-09.jpg",
    h3: "Viaje a Tailandia",
    h6: "Asia",
    p: "Descubre templos, mercados y playas tropicales.",
    boton: "Ver viaje"
  },
  {
    img: "img/viaje-10.jpg",
    h3: "Viaje a Nueva Zelanda",
    h6: "Oceania",
    p: "Recorre montanas, lagos y escenarios naturales espectaculares.",
    boton: "Ver viaje"
  }
];


const botonEuropa = document.querySelector('.botonEuropa');
const botonAfrica = document.querySelector('.botonAfrica');
const botonAsia = document.querySelector('.botonAsia');
const botonAmerica = document.querySelector('botonAmerica');
const botonOceania = document.querySelector('botonOceania');

const buscador = document.querySelector('.buscador');

const sectionTarjetas = document.querySelector('.tarjetas');

function crearTarjetas(productos){
  sectionTarjetas.innerHTML = "";

  productos.forEach(element => {
    const tarjeta = document.createElement('producto');
    tarjeta.classList.add('article');

    tarjeta.innerHTML = `
      <img>${element.img}</img>
      <h3>${element.h3}</h3>
      <h6>${element.h6}</h6>
      <p>${element.p}</p>
      <button>${element.button}</button>
    `

    sectionTarjetas.appendChild(tarjeta)
  });
}

crearTarjetas(servicios);

const viajesEuropa = servicios.filter((servicio) => servicio.h6 === "Europa");
botonEuropa.addEventListener('click', () =>{
    crearTarjetas(viajesEuropa)
});

const viajesAmerica = servicios.filter((servicio) => servicio.h6 === "America");
botonAmerica.addEventListener('click', () =>{
  crearTarjetas(viajesAmerica)
});

const viajesAsia = servicios.filter((servicio) => servicio.h6 === "Asia");
botonAsia.addEventListener('click', () =>{
    crearTarjetas(viajesAsia)
});

const viajesAfrica = servicios.filter((servicio) => servicio.h6 === "Africa");
botonAfrica.addEventListener('click', () =>{
  crearTarjetas(viajesAfrica)
});

const viajesOceania = servicios.filter((servicio) => servicio.h6 === "Oceania");
botonOceania.addEventListener('click', () =>{
  crearTarjetas(viajesOceania)
});