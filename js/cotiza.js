let bntCotizar = document.getElementById("btnCotizar");
bntCotizar.addEventListener("click", function (e){
    e.preventDefault();
    let nombre = document.getElementById("inputNombre");
    let correo = document.getElementById("inputCorreo");
    let tel = document.getElementById("inputTele");
    let envio = document.getElementById("checkEnvio").checked;
    let cantidad = parseInt(document.getElementById("inputCant").value);
    let postre = document.getElementById("inputPostre");
    console.log(postre.selectedIndex);
    let ingre = document.getElementById("inputIngre");
    console.log(ingre.selectedIndex);
    let Precio = document.getElementById("Precio");
   
// validacion de campos

    if (nombre.value.length >= 12){ 
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    } else {nombre.classList.remove("is-valid");
            nombre.classList.add("is-invalid");}
    
    if ((tel.value.length>=10)&&(! isNaN(tlf.value))){                               //validación Teléfono 
        tel.classList.remove("is-invalid");
        tel.classList.add("is-valid");
    }else {tel.classList.remove("is-valid");
          tel.classList.add("is-invalid");}

    if (!(correo.validity.typeMismatch)&&(correo.value.length >= 6)){                               
        correo.classList.remove("is-invalid");
        correo.classList.add("is-valid");
    }else {correo.classList.remove("is-valid");
          correo.classList.add("is-invalid");}

    
    Precio.innerHTML = "El precio aproximado es de: $ " + cotizar(cantidad,postre.selectedIndex,ingre.selectedIndex,envio) + "MXN";
});

function cotizar(can,po,ing,env){

    let result = can;

        switch(po){
            case 1:
            result *=65;
            break;
            case 2:
            result *=150;
            break;
            case 3:
            result *=12;
            break;} 
            

        switch(ing){
            case 1:
            result *=1;
            break;
            case 2:
            result *=1.30;
            break;
            case 3:
            result *=1.50;
            break;
            case 4:
            result *=1.70;
            break;} 


        if(env){
        result += 200;}
        return result;
}