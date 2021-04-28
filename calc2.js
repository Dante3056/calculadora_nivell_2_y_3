/*almaceno los botones dentro de arrays  y le aplico el método getElementsByName para llamarlos dentro del array y 
convertirlos en objetos de js*/
const btnNumeros = document.getElementsByName("input-number");
const btnOperacion = document.getElementsByName("input-operacion");
const btnReset = document.getElementsByName("input-reset")[0];
const btnResultado = document.getElementsByName("input-resultado")[0];
var result = document.getElementById("result");
var opActual = '';
var opAnterior = '';
var operacion = undefined;

/*agregando eventos a los arrays almacenados usando bucle for each y addEventListener para asignarlo a cada objeto del array.
usé la propiedad .innerText para que el valor capturado de las funciones sea el mismo que está impreso en los botones y así ahorrar código*/
btnNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
    })
})

btnOperacion.forEach(function(boton){
    boton.addEventListener("click", function(){
       agregarOperacion(boton.innerText);
    })
})

btnReset.addEventListener("click", function(){
    clear();
    actualizarDisplay();
})

btnResultado.addEventListener("click", function(){
    calcular();
    actualizarDisplay();
})

//implementando funciones
//funcion de Display
function agregarNumero(num){
    opActual = opActual + num;          
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value = opActual;
}

/*funcion de agregar el operador. agregué actualizarDisplay() para que se vaya mostrando el calculo a tiempo
real de mas de 2 operadores*/ 

function agregarOperacion(op){        
    calcular();
    actualizarDisplay();
    operacion = op;
    opAnterior = opActual;
    opActual ='';
}
/*funcion de calcular usando switch y lanzando un alert cuando se divide por cero.usé parseFloat para transformar
los strings en btnNumeros.*/
function calcular(){
    var calculo;
    var anterior = parseFloat(opAnterior);
    var actual = parseFloat(opActual);
    
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':            
            if(actual != 0){
                calculo = anterior / actual;
            }else{
                alert("La division por cero no está contemplada");
                calculo = '';
                clear();
            }
            break;
        default:
            return;                  
    }
    opActual = calculo;
    operacion = undefined;
    opAnterior = '';
}
//Fn resetear calculadora.
function clear(){
    opActual = '';
    opAnterior = '';
    operacion = undefined;
}

