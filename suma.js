
function Sumar(){
    var Num1 = parseInt(document.getElementById("Num1").value);
    var Num2 = parseInt(document.getElementById("Num2").value);
    let rt = Num1 + Num2;
    resultado = document.querySelector("#Resultado");
    return resultado.innerHTML = "Resultado = " + rt
}