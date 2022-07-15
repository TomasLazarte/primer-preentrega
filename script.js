class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

function ordenarProductos(productos) {
    let ordenar = parseInt(prompt("Ingrese 1 para ordenar el precio de los productos de menor a mayor, o 2 para ordenar de mayor a menor"))
    if(ordenar === 1) {
        console.log(productos.sort((a,b) => a.precio-b.precio))
    } else if(ordenar === 2) {
        console.log(productos.sort((a,b) => b.precio-a.precio))
    }
}

function buscarPreciosMenores(productos) {
    let precio = parseFloat(prompt("Ingrese un precio "))
    let preciosMenores = productos.filter(producto => producto.precio <= precio)
    console.log(preciosMenores)
}

function buscarPreciosMayores(productos) {
    let precio = parseFloat(prompt("Ingrese un precio "))
    let preciosMayores = productos.filter(producto => producto.precio >= precio)
    console.log(preciosMayores)
}

const productos = []

let nombre, precio, stock, ingresar, busqueda

do {
    nombre = prompt("Ingrese un nombre de producto").toLowerCase()
    precio = parseFloat(prompt("Ingrese un precio de producto")) 
    stock = parseInt(prompt("Ingrese stock de producto"))
    const producto = new Producto(nombre, precio, stock)
    productos.push(producto)
    ingresar = prompt("¿Desea ingresar mas productos?").toLowerCase()
} while(ingresar != "no")

do {
    busqueda = parseInt(prompt(`Ingrese el numero que corresponda a su busqueda:
        1- Ordenar todos los productos segun su precio
        2- Buscar productos con precio menor o igual al ingresado
        3- Buscar productos con precio mayor o igual al ingresado
    `))
} while(busqueda < 1 || busqueda > 3)

switch(busqueda) {
    case 1:
        ordenarProductos(productos)
        break
    case 2:
        buscarPreciosMenores(productos)
        break
    case 3:
        buscarPreciosMayores(productos)
    default:
        alert("Por favor, ingrese una opción válida")
        break
}