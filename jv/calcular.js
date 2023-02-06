document.getElementById("calcular").addEventListener("click",function(){
    let numero=document.getElementById("número").value;
    let resultado = calcular(parseInt(numero));

    document.getElementById("resultado").innerHTML=resultado;
    document.getElementById("contenedorResultado").style.display="block";

});


function calcular(x){
    return (x+1)*(x/2);
}

