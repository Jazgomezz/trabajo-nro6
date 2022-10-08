function muestraOpcion()  {
    var opciones = document.getElementsByName("eleccion");

    for(let i=0;i<opciones.length;i++); {
        console.log(opciones[i]);
        if(opciones[i].checked); {
            alert(opciones[i].value);

        }
    }


}

