const maximaSumaProducto = 100000;
const productoMaximos = 5;
const descuento = 10;
const iva = 21;


let sumaProductos= 0;
let totalProducto = 0;
let producto = prompt("Ingrese su Producto");
let valorProducto = parseFloat (prompt("Ingrese el valor de su producto"));

while  ((producto != "FIN") && (producto != null)) {
    sumaProductos = sumaProductos + valorProducto;
    console.log("Suma Productos: " + sumaProductos);


    totalProducto++;
    console.log();
    producto = prompt ("Nombre del Producto: (Ingrese FIN para Terminar)").toUpperCase();
    valorProducto = parseFloat (prompt("Ingrese el valor de su producto:"));

    if (valorProducto == null) {
        valorProducto = 0;
    }

}

//IVA

sumaProductos = sumaProductos + ((sumaProductos * iva) /100);



if (( sumaProductos >= maximaSumaProducto) || (totalProducto >= productoMaximos)) {
    sumaProductos = sumaProductos - ((sumaProductos * descuento) / 100);
}


alert ("El Total de los producto es: $" + sumaProductos.toFixed(2));