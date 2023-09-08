//VARIABLES
let dinero_pedido;
let num_cuotas;
let repetir = "no";
let selecMenu;
let nuevo_prestamo;
let nombre;
let apellido;


//CLASES
class prestamo{
    constructor(nombre , apellido , dinero_pedido , num_cuotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dinero_pedido = dinero_pedido;
        this.num_cuotas = num_cuotas;
    }
}

//ARRAYS

let HistorialPrestamos = []

//FUNCIONES


//FUNCION DEL MENU 
function menuSeleccion(){
    console.log("selecciona lo que quieres hacer")
    selecMenu = prompt("1 = pedir prestamo // 2 = mirar mis prestamos")

    if(selecMenu == 1){
        recolectorDatos();
    }
    else if (selecMenu == 2){
        mostrarDatos();
    }
    else{
        console.log("opcion incorrecta, reintentar");
        volver()
    }
}


//FUNCION RECOLECTORA DE DATOS
function recolectorDatos(){
    
    nombre = prompt("escriba su nombre a continuacion");
    apellido = prompt("ahora su apellido");
    

    dinero_pedido = prompt("¿cuanto es el monto que quieres pedir?");
    dinero_pedido = parseInt(dinero_pedido);


    console.log("usted a ingresado", dinero_pedido,"pesos");
    num_cuotas = prompt("¿en cuantas cuotas quieres devolverlo? 1/3/6/12/24");

    nuevo_prestamo = new prestamo(nombre , apellido, dinero_pedido , num_cuotas);
    HistorialPrestamos.push(nuevo_prestamo);
    
    selectorCuotas();

}
//FUNCION MOSTRAR HISTORIAL DE PRESTAMOS

function mostrarDatos(){
    console.log("usted a seleccionado ver su historial de prestamos");

    let nombre_buscador = prompt("porfavor escriba su nombre");
    let apellido_buscador = prompt("escriba su apellido");
    
    let resultado_filter = HistorialPrestamos.filter(()=> {return nombre == nombre_buscador && apellido == apellido_buscador})
    if(nombre != nombre_buscador || apellido != apellido_buscador){
        console.log("datos ingresados incorrectos, reintentar");
        volver();
    }
    else if (nombre == nombre_buscador && apellido == apellido_buscador){
        resultado_filter.forEach(mostrarResultados);
        HistorialPrestamos = [];
        volver() 
    }

    function mostrarResultados(data){
    console.log("<-------------------------->")
    console.log("|NOMBRE:",data.nombre,"|APELLIDO:",data.apellido,"DINERO SOLICITADO:$", data.dinero_pedido, "|CANTIDAD DE CUOTAS:", data.num_cuotas,"CUOTAS|");
    console.log("");
    }

    
}


//FUNCION SELECTOR DE CUOTAS
function selectorCuotas(){
    if(num_cuotas == 1){
        CalculoCuotas(1);
        confirPrestamo()
    }
    
    else if(num_cuotas == 3){
        CalculoCuotas(3);
        confirPrestamo()
    }
    
    else if(num_cuotas == 6){
        CalculoCuotas(6);
        confirPrestamo()
    }
    else if(num_cuotas == 12){
        CalculoCuotas(12);
        confirPrestamo()
    }
    else if(num_cuotas == 24){
        CalculoCuotas(24);
        confirPrestamo()
    }
    else{
        console.log("usted a ingresado una opcion incorrecta");
        console.log("recargue pagina y reintentelo");
        volver()
    }
}


//FUNCION CALCULADORA DE CUOTAS
function CalculoCuotas(num_cuotas_funcion){
    let interes
    interes = parseInt(interes)

    if(num_cuotas_funcion == 1){
        interes = dinero_pedido * 0
    }
    else if(num_cuotas_funcion == 3){
        interes = dinero_pedido * 0.15
    }
    else if(num_cuotas_funcion == 6){
        interes = dinero_pedido * 0.5
    }
    else if(num_cuotas_funcion == 12){
        interes = dinero_pedido * 1
    }
    else if(num_cuotas_funcion == 24){
        interes = dinero_pedido * 2
    }
    else{
        console.log("error en ejecucion de funcion")
    }
    
    let PrecioFinal=  dinero_pedido + interes;
    let PrecioCuotas= PrecioFinal / num_cuotas;
    console.log("usted a seleccionado:", num_cuotas, "cuotas");
    console.log("el precio por cuota es de: $", PrecioCuotas, "pesos");
    console.log("el costo total del prestamo es de: $",PrecioFinal, "pesos");
    console.log("tienes un interes de: $", interes, "pesos");
}


//FUNCION DE CONFIRMACION DE PRESTAMO
function confirPrestamo(){
    console.log("¿quieres confirmar prestamo?");
    let ConfirmarPrestamo = prompt("si= confirmar prestamo / no= cancelar prestamo");
    
    if(ConfirmarPrestamo == "si"){
        console.log("felicitaciones, usted a adiquirido un prestamo");
        console.log(" el dinero se depositara a su cuenta en la brevedad");
        volver()
    }
    else if(ConfirmarPrestamo == "no"){
        console.log("prestamo cancelado")
        volver()
    }
    else{
        console.log("opcion inexistente, reintentelo")
    }
}


//FUNCION VOLVER AL INICIO
function volver(){
    repetir = prompt("quieres volver al inicio? si / no");
}


//CICLO DEL PROGRAMA

console.log("Bienvenido al simulador de prestamos");
console.log("para comenzar complete los datos solicitados");

do{
menuSeleccion();

}while(repetir == "si");

console.log("Muchas gracias por utilizar los servicios de prestamos online.com")
