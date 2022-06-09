const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

const nombres = productos.map( (e) => e.nombre).join(', ')
console.log(nombres)

const precios = productos.map( (e) => e.precio).sort((a, b) => a - b)

const precioTotal = precios.reduce((a, b) => a + b)

const promedio = precioTotal / precios.length

const precioMenor = precios[precios.length - precios.length]

const precioMayor = precios[precios.length - 1]

const obj = {
    nombres: nombres,
    precioTotal: precioTotal,
    promedio: promedio,
    precioMenor: precioMenor,
    precioMayor: precioMayor
}

console.log(obj)