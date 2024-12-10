function Suma(){
    let Suma = document.getElementById("Suma");
    let Resta = document.getElementById("Resta");
    let Division = document.getElementById("Division");
    let Multiplicacion = document.getElementById("Multiplicacion");
    Multiplicacion.style.display = "none";
    Division.style.display = "none";
    Resta.style.display = "none";
    Suma.style.display = "Flex";
    Suma.style.borderBottom = "2px solid black"

    let btn_sumaS =  document.getElementById("btn_sumaS");
    btn_sumaS.style.borderBottom = "2px solid black"
    let btn_restaR = document.getElementById("btn_restaR");
    btn_restaR.style.borderBottom = "none"
    let btn_multiM = document.getElementById("btn_multiM");
    btn_multiM.style.borderBottom = "none"
    let btn_DivisionD = document.getElementById("btn_DivisionD");
    btn_DivisionD.style.borderBottom = "none"
    //Textbox de suma
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "none";
}
function QS_2(){
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "Flex";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "none";
}
function QS_3(){
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="Flex";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "none";
}
function QS_4(){
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="Flex";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "none";
}
function QS_5(){
    let Dos_numeros = document.getElementById("Dos_numeros");
    Dos_numeros.style.display = "none";
    let Tres_numeros = document.getElementById("Tres_numeros");
    Tres_numeros.style.display ="none";
    let cuatro_numeros = document.getElementById("cuatro_numeros");
    cuatro_numeros.style.display ="none";
    let cinco_numeros = document.getElementById("cinco_numeros");
    cinco_numeros.style.display = "Flex";
}
//funcion de sumar dos valores//  
function sumar(){
    let Num1 = parseFloat(document.getElementById("Num1").value);
    let Num2 = parseFloat(document.getElementById("Num2").value);
    let result = Num1 + Num2;
    resulta = document.querySelector("#Sumar"); 
    return resulta.innerHTML = result;
}
function Sumar1(){
    let Num1 = parseFloat(document.getElementById("Num11").value);
    let Num2 = parseFloat(document.getElementById("Num22").value);
    let Num3 = parseFloat(document.getElementById("Num33").value);
    let result = Num1 + Num2 + Num3;
    resulta = document.querySelector("#Sumar1");
    return resulta.innerHTML = result;  
}
function Sumar2(){
    let Num1 = parseFloat(document.getElementById("Num111").value);
    let Num2 = parseFloat(document.getElementById("Num222").value);
    let Num3 = parseFloat(document.getElementById("Num333").value);
    let Num4 = parseFloat(document.getElementById("Num444").value);
    let result = Num1 + Num2 + Num3 + Num4;
    resulta = document.querySelector("#Sumar2");
    return resulta.innerHTML = result;
}
function Sumar3(){
    let Num1 = parseFloat(document.getElementById("Num1111").value);
    let Num2 = parseFloat(document.getElementById("Num2222").value);
    let Num3 = parseFloat(document.getElementById("Num3333").value);
    let Num4 = parseFloat(document.getElementById("Num4444").value);
    let Num5 = parseFloat(document.getElementById("Num5555").value);
    let result = Num1 + Num2 + Num3 + Num4 + Num5;
    resulta = document.querySelector("#Sumar3");
    return resulta.innerHTML = result;
}
//Funcion de resta
function Resta(){
    let Resta = document.getElementById("Resta");
    let Suma = document.getElementById("Suma");
    let Division = document.getElementById("Division");
    let Multiplicacion = document.getElementById("Multiplicacion");
    Multiplicacion.style.display = "none";
    Division.style.display = "none";
    Resta.style.display = "Flex";
    Suma.style.display = "none";

    let btn_sumaS =  document.getElementById("btn_sumaS");
    btn_sumaS.style.borderBottom = "none"
    let btn_restaR = document.getElementById("btn_restaR");
    btn_restaR.style.borderBottom = "2px solid black"
    let btn_multiM = document.getElementById("btn_multiM");
    btn_multiM.style.borderBottom = "none"
    let btn_DivisionD = document.getElementById("btn_DivisionD");
    btn_DivisionD.style.borderBottom = "none"
    //Textbox de resta
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "none";
}
function QR_2(){
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "Flex";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "none";
}
function QR_3(){
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="Flex";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "none";
}
function QR_4(){
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="Flex";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "none";
}
function QR_5(){
    let Dos_numerosR = document.getElementById("Dos_numerosR");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosR");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosR");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosR");
    cinco_numerosR.style.display = "Flex";
}
//funcion de multipicacion
function Multiplicacion(){
    let Resta = document.getElementById("Resta");
    let Suma = document.getElementById("Suma");
    let Division = document.getElementById("Division");
    let Multiplicacion = document.getElementById("Multiplicacion");
    Multiplicacion.style.display = "flex";
    Division.style.display = "none";
    Resta.style.display = "none";
    Suma.style.display = "none";

    let btn_sumaS =  document.getElementById("btn_sumaS");
    btn_sumaS.style.borderBottom = "none"
    let btn_restaR = document.getElementById("btn_restaR");
    btn_restaR.style.borderBottom = "none"
    let btn_multiM = document.getElementById("btn_multiM");
    btn_multiM.style.borderBottom = "2px solid black"
    let btn_DivisionD = document.getElementById("btn_DivisionD");
    btn_DivisionD.style.borderBottom = "none"
    //Textbox de Multiplicacion
    let Dos_numerosR = document.getElementById("Dos_numerosM");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosM");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosM");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosM");
    cinco_numerosR.style.display = "none";
}
function QM_2(){
    let Dos_numerosR = document.getElementById("Dos_numerosM");
    Dos_numerosR.style.display = "Flex";
    let Tres_numerosR = document.getElementById("Tres_numerosM");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosM");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosM");
    cinco_numerosR.style.display = "none";
}
function QM_3(){
    let Dos_numerosR = document.getElementById("Dos_numerosM");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosM");
    Tres_numerosR.style.display ="Flex";
    let cuatro_numerosR = document.getElementById("cuatro_numerosM");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosM");
    cinco_numerosR.style.display = "none";
}
function QM_4(){
    let Dos_numerosR = document.getElementById("Dos_numerosM");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosM");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosM");
    cuatro_numerosR.style.display ="Flex";
    let cinco_numerosR = document.getElementById("cinco_numerosM");
    cinco_numerosR.style.display = "none";
}
function QM_5(){
    let Dos_numerosR = document.getElementById("Dos_numerosM");
    Dos_numerosR.style.display = "none";
    let Tres_numerosR = document.getElementById("Tres_numerosM");
    Tres_numerosR.style.display ="none";
    let cuatro_numerosR = document.getElementById("cuatro_numerosM");
    cuatro_numerosR.style.display ="none";
    let cinco_numerosR = document.getElementById("cinco_numerosM");
    cinco_numerosR.style.display = "Flex";
}

//funcion de division
function Division(){
    let Resta = document.getElementById("Resta");
    let Suma = document.getElementById("Suma");
    let Division = document.getElementById("Division");
    let Multiplicacion = document.getElementById("Multiplicacion");
    Multiplicacion.style.display = "none";
    Division.style.display = "flex";
    Resta.style.display = "none";
    Suma.style.display = "none";

    let btn_sumaS =  document.getElementById("btn_sumaS");
    btn_sumaS.style.borderBottom = "none"
    let btn_restaR = document.getElementById("btn_restaR");
    btn_restaR.style.borderBottom = "none"
    let btn_multiM = document.getElementById("btn_multiM");
    btn_multiM.style.borderBottom = "none"
    let btn_DivisionD = document.getElementById("btn_DivisionD");
    btn_DivisionD.style.borderBottom = "2px solid black"
}
function QD_2(){
    let Dos_numerosD = document.getElementById("Dos_numerosD");
    Dos_numerosD.style.display = "Flex";
    let Tres_numerosD = document.getElementById("Tres_numerosD");
    Tres_numerosD.style.display ="none";
    let cuatro_numerosD = document.getElementById("cuatro_numerosD");
    cuatro_numerosD.style.display ="none";
    let cinco_numerosD = document.getElementById("cinco_numerosD");
    cinco_numerosD.style.display = "none";
}
function QD_3(){
    let Dos_numerosD = document.getElementById("Dos_numerosD");
    Dos_numerosD.style.display = "none";
    let Tres_numerosD = document.getElementById("Tres_numerosD");
    Tres_numerosD.style.display ="Flex";
    let cuatro_numerosD = document.getElementById("cuatro_numerosD");
    cuatro_numerosD.style.display ="none";
    let cinco_numerosD = document.getElementById("cinco_numerosD");
    cinco_numerosD.style.display = "none";
}
function QD_4(){
    let Dos_numerosD = document.getElementById("Dos_numerosD");
    Dos_numerosD.style.display = "none";
    let Tres_numerosD = document.getElementById("Tres_numerosD");
    Tres_numerosD.style.display ="none";
    let cuatro_numerosD = document.getElementById("cuatro_numerosD");
    cuatro_numerosD.style.display ="Flex";
    let cinco_numerosD = document.getElementById("cinco_numerosD");
    cinco_numerosD.style.display = "none";
}
function QD_5(){
    let Dos_numerosD = document.getElementById("Dos_numerosD");
    Dos_numerosD.style.display = "none";
    let Tres_numerosD = document.getElementById("Tres_numerosD");
    Tres_numerosD.style.display ="none";
    let cuatro_numerosD = document.getElementById("cuatro_numerosD");
    cuatro_numerosD.style.display ="none";
    let cinco_numerosD = document.getElementById("cinco_numerosD");
    cinco_numerosD.style.display = "Flex";
}