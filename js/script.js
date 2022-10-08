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

function sumando() {  
    var x,y,suma,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      suma=parseFloat(x)+parseFloat(y);  
      text= suma;  
    }  
    document.getElementById("sumando").innerHTML = text;  
  }  