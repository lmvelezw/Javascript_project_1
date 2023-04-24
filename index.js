
const IVA19 = 1.19 // Valor del IVA en Colombia

//Pide el nombre para comenzar el proceso
// let nombre

// function ingresarNombre(nombre){
//     nombre = prompt("Ingrese el nombre del cliente");
//     while(nombre === ""){
//         alert("No ha ingresado un nombre")
//         nombre = prompt("Ingrese el nombre del cliente")
//         }
//     return alert("Hola " + nombre)
//     }
// ingresarNombre(nombre)
// console.log(nombre);

//Pide el nombre para comenzar el proceso
let nombre;

function ingresarNombre(){
    nombre = prompt("Ingrese el nombre del cliente");
    while(nombre === ""){
        alert("No ha ingresado un nombre")
        nombre = prompt("Ingrese el nombre del cliente")
    }
    alert("Hola " + nombre);
}

ingresarNombre();


//Recogemos información de la compra
let cantidadProductos = parseInt(prompt("Cuántos productos llevas?"));

let totalCompra = 0;

for(let i = 0; i < cantidadProductos; i++){ 
    let valorProducto = parseFloat(prompt("Ingresa el valor del producto"));
    totalCompra = totalCompra + valorProducto;
}
console.log(totalCompra);

//Preguntamos si aplica algún descuento
let descuento = 0;

let aplicaDescuento = prompt("Aplica descuento del 5% por ser socio? (si o no)");
if(aplicaDescuento.toLowerCase() === "si"){
    descuento = 0.05;
}else if(aplicaDescuento.toLowerCase() === "no"){
    descuento = 0;
}else {alert("No pusiste una respuesta válida")};

//Calcular el valor de la compra sin IVA y con descuento

//Calcular el valor de la compra sin IVA y con descuento
let valorCompraSinIVA = totalCompra - (totalCompra * descuento);


//Calcular el valor total de la compra
let valorCompraFinal = valorCompraSinIVA * IVA19;


//Resumen de compra para el cliente
alert("El total de la compra sin descuento es: $" + totalCompra.toFixed(2) + "\n" +
      "El descuento aplicado es: $" + (totalCompra * descuento).toFixed(2) + "\n" +
      "El valor del IVA (19%) es: $" + (valorCompraSinIVA * 0.19).toFixed(2) + "\n" +
      "El valor total de la compra es: $" + valorCompraFinal.toFixed(2));