//#region 
function sumar(){
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;

    if(numero1!=='' && numero2!==''){
        var suma = parseInt(numero1)+parseInt(numero2);
        document.getElementById('resultado').value = suma;
    }
}
//#endregion
