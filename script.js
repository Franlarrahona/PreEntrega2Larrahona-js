//VARIABLES
let dinero_pedido;
let num_cuotas;
let repetir = "no";
let selecMenu;
let nuevo_prestamo;
let nombre;
let apellido;

let PrecioFinal
let PrecioCuotas
let interes


let infoPrestamo
let btnAceptarPrestamo
let confirmacionPrest

let buscadorHistorial
let resultadosBusqueda



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


//EVENTOS   

let btnPedir = document.getElementById("btnPedir");
let btnMirar = document.getElementById("btnMirar");
let contenedorInfo = document.getElementsByClassName("contenedorInfo");

let inpNombre = document.getElementById("inpNombre");
let inpApellido = document.getElementById("inpApellido");
let inpMonto = document.getElementById("inpMonto");
let inpCuotas = document.getElementById("inpCuotas");
let btnEnviar = document.getElementById("btnEnviar");

let buscarNomb = document.getElementById("buscarNomb");
let buscarApelli = document.getElementById("buscarApelli");
let buscarHisto = document.getElementById("btnBuscarHisto")


let btnVolver = document.getElementById("btnVolver");

btnPedir.addEventListener("click",mostrarRecolector);
btnMirar.addEventListener("click",mostrarDatos);
btnEnviar.addEventListener("click",recolectorDatos);

btnVolver.addEventListener("click",ocultarRecolector);

btnBuscarHisto.addEventListener("click",compararNomb)

//FUNCIONES


//FUNCION MOSTRAR INFORMACION DE PRESTAMO


function mostrarInfoPrestamo(){

    infoPrestamo = document.createElement("h2")
    infoPrestamo.innerHTML = `usted a seleccionado ${num_cuotas} cuotas 
                            <br>
                            el precio por cuota es de: $ ${PrecioCuotas} pesos
                            <br>
                            el costo total del prestamo es de: $ ${PrecioFinal} pesos
                            <br>
                            tienes un interes de: $ ${interes} pesos`;
    infoPrestamo.className="infoPrestamo";
    document.body.append(infoPrestamo);

    btnAceptarPrestamo = document.createElement("button");
    btnAceptarPrestamo.innerHTML = "Confirmar Prestamo";
    btnAceptarPrestamo.className ="btnAceptarPrestamo";
    document.body.append(btnAceptarPrestamo);
    btnAceptarPrestamo.addEventListener("click",confirmPrestamo)

    btnVolverInfo = document.createElement("button");
    btnVolverInfo.innerHTML = "volver";
    btnVolverInfo.className = "btnVolverStyle";
    btnVolverInfo.id = "btnVolverInfo"
    document.body.append(btnVolverInfo);
    btnVolverInfo.addEventListener("click",ocultarInfoPrestamo)


    

    console.log("usted a seleccionado:", num_cuotas, "cuotas");
    console.log("el precio por cuota es de: $", PrecioCuotas, "pesos");
    console.log("el costo total del prestamo es de: $",PrecioFinal, "pesos");
    console.log("tienes un interes de: $", interes, "pesos");
    

}




//FUNCION PARA MOSTRAR EL FORMULARIO DE PRESTAMOS

function mostrarRecolector(){


    let formPrestamo = document.querySelector(".formPrestamo");
    formPrestamo.style. display = "flex"


    ocultarBuscadorHistorial();
    ocultarInfoPrestamo();
    ocultarConfirmacionPrest();
    
}

//FUNCION PARA OCULTAR EL HISTORIAL
function ocultarHistorial(){
    resultadosBusqueda.remove();
}

//FUNCION PARA OCULTAR BUSCADOR DE HISTORIAL

function ocultarBuscadorHistorial(){

    buscadorHistorial = document.querySelector(".buscadorHistorial");
    buscadorHistorial.style. display = "none"

}

//FUNCION PARA OCULTAR FORMULARIO DE PRESTAMOS

function ocultarRecolector(){

    let formPrestamo = document.querySelector(".formPrestamo")
    formPrestamo.style. display = "none"
    

}

//FUNCION PARA OCULTAR INFORMACION DE PRESTAMOS 

function ocultarInfoPrestamo(){
    infoPrestamo.remove()
    btnAceptarPrestamo.remove()
    btnVolverInfo.remove()
    
}

//FUNCION PARA OCULTAR LA CONFIRMACION DEL PRESTAMO

function ocultarConfirmacionPrest(){
    confirmacionPrest.remove()
}


//FUNCION RECOLECTORA DE DATOS

function recolectorDatos(){

    let formPrestamo = document.querySelector(".formPrestamo")
    formPrestamo.style. display = "none"



    nombre = inpNombre.value ;
    apellido = inpApellido.value ;

    dinero_pedido = inpMonto.value ;
    dinero_pedido = parseInt(dinero_pedido) ;


    num_cuotas = inpCuotas.value ;
    num_cuotas = parseInt (num_cuotas);
    
    
    
    
    console.log (nombre , apellido , dinero_pedido , num_cuotas)
    
    

    CalculoCuotas(num_cuotas);

    nuevo_prestamo = new prestamo(nombre , apellido, dinero_pedido , num_cuotas);
    HistorialPrestamos.push(nuevo_prestamo);

    console.log(HistorialPrestamos)
    
}
//FUNCION COMPARADORA DE NOMBRES

function compararNomb(){

    let nombre_buscador = buscarNomb.value;
    let apellido_buscador = buscarApelli.value;

    //console.log(nombre_buscador , apellido_buscador)

    let resultado_filter = HistorialPrestamos.filter(()=> {return nombre == nombre_buscador && apellido == apellido_buscador})
    if(nombre != nombre_buscador || apellido != apellido_buscador){

        let errorVerificacion = document.createElement("h2")
        errorVerificacion.innerHTML = "Los datos ingresados no corresponden a un prestamo, intentar de nuevo";
        errorVerificacion.className ="errorVerificacion";
        document.body.append(errorVerificacion);

        console.log("datos ingresados incorrectos, reintentar");


    }
    else if (nombre == nombre_buscador && apellido == apellido_buscador){
        resultado_filter.forEach(mostrarResultados);
        HistorialPrestamos = [];
    }
    
    function mostrarResultados(data){
        
        resultadosBusqueda = document.createElement("h3");
        resultadosBusqueda.innerHTML = `-Nombre: ${data.nombre} | Apellido: ${data.apellido} | Dinero Solicitado:$ ${data.dinero_pedido} | Cantidad de Cuotas: ${data.num_cuotas} cuotas`
        resultadosBusqueda.className = "resultadosBusqueda";
        document.body.append(resultadosBusqueda);


    console.log("<-------------------------->")
    console.log(`|NOMBRE:",data.nombre,"|APELLIDO:",data.apellido,"DINERO SOLICITADO:$", data.dinero_pedido, "|CANTIDAD DE CUOTAS:", data.num_cuotas,"CUOTAS|`);
    console.log("");
    }

}


//FUNCION BUSCAR HISTORIAL DE PRESTAMOS

function mostrarDatos(){
    console.log("usted a seleccionado ver su historial de prestamos");

    buscadorHistorial = document.querySelector(".buscadorHistorial");
    buscadorHistorial.style. display = "inline"
    
    btnBuscarHisto.addEventListener("click", compararNomb)



    ocultarConfirmacionPrest();
    ocultarRecolector();
    ocultarInfoPrestamo();

    
}

//FUNCION CALCULADORA DE CUOTAS
function CalculoCuotas(num_cuotas_funcion){
    
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
    
    PrecioFinal=  dinero_pedido + interes;
    PrecioCuotas= PrecioFinal / num_cuotas;

    mostrarInfoPrestamo()

    
}


//FUNCION DE CONFIRMACION DE PRESTAMO
function confirmPrestamo(){
    console.log("prestamo confirmado")

    ocultarInfoPrestamo()


    confirmacionPrest = document.createElement("h2")
    confirmacionPrest.innerHTML =`El prestamo de $ ${dinero_pedido} pesos de ${apellido},${nombre} ha sido aceptado.
                                <br>
                                Sera enviado a su cuenta bancaria a la brevedad.
                                <br>
                                gracias por usar simulado de prestamos.com`
    confirmacionPrest.className = "confirmacionPrest"
    document.body.append(confirmacionPrest)
}

//CICLO DEL PROGRAMA


do{


}while(repetir == "si");

console.log("Muchas gracias por utilizar los servicios de prestamos online.com")
