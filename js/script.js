//#region 
function muestraOpcion()  {
    var opciones = document.getElementsByName("eleccion");

    for(let i=0;i<opciones.length;i++); {
        console.log(opciones[i]);
        if(opciones[i].checked); {
            alert(opciones[i].value);

        }
    }


}
//#endregion
//#region 
let a=5;
let b=6;

console.log ('suma', a+b);
console.log ('resta', a-b);
console.log ('multiplicación', a*b);
console.log ('división', a/b);
//#endregion

