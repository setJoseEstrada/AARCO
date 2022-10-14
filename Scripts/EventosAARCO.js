

$(document).ready(() => {
 
    Eventos();
});



function Eventos() {

    $('#SelectMarcas').on('change', evento => {
        
        var id = $(evento.target).val();
        getSubMarca(id);
    });
  
    $('#SelectSubMarcas').on('change', evento => {

        var id = $(evento.target).val();
        
        getModelo(id);
    });
    $('#SelectModelos').on('change', evento => {

        var id = $(evento.target).val();

        getDescripcion(id);
    });
   
}

function getSubMarca(id) {



    var url = 'https://localhost:44376/api/Submarcas/GetSubMarcasByMarcasId/' + id;
    $.ajax({

        type: 'GET',
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: AgregarSubMarcas,
    });
}

function getModelo(id) {



    var url = 'https://localhost:44376/api/Modelos/GetModelosid/' + id;
    $.ajax({

        type: 'GET',
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: AgregarSubModelos,
    });
}


function getDescripcion(id) {



    var url = 'https://localhost:44376/api/Descripcions/GetDescripcionid/' + id;
    $.ajax({

        type: 'GET',
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: AgregarDescripcion,
    });
}



function AgregarSubMarcas(listasubmarcas) {
    $("#SelectSubMarcas").empty();
    $("#SelectSubMarcas").append($("<option>", { value: "", text: "Elige una opcion" }));
    listasubmarcas.forEach(subMarca1 => {
    
        $("#SelectSubMarcas").append($("<option>", { value: subMarca1.id, text: subMarca1.submarca1 }));
    });
}



function AgregarSubModelos(listamodelo) {
    $("#SelectModelos").empty();
    $("#SelectModelos").append($("<option>", { value: "", text: "Elige una opcion" }));
    listamodelo.forEach(subModelo => {
        
       
        $("#SelectModelos").append($("<option>", { value: subModelo.id, text: subModelo.modelo1 }));
    });
}

function AgregarDescripcion(listadescripcion) {
    $("#SelectDescripcion").empty();
    $("#SelectDescripcion").append($("<option>", { value: "", text: "Elige una opcion" }));
    listadescripcion.forEach(des => {


        $("#SelectDescripcion").append($("<option>", { value: des.descripcionId, text: des.descripcion1 }));

     
    });
}


/////Funcionees para domicilio

function getCodigioP() {
    var url = "https://api-test.aarco.com.mx/api-examen/api/examen/sepomex/"; 
    var cp = document.getElementById("CodigoPostal").value;
    $.ajax({
        url: url + cp,
        dataType: "json",
        contentType: "application/json",
        type: "get",
        success: AgregarCodigoP,
        error: error => alert(error)
    });
}

function AgregarCodigoP(responde) {
    var jsonResponde = JSON.parse(responde.CatalogoJsonString); // "deserealizar"
    document.getElementById("Estado").value = jsonResponde[0].Municipio.Estado.sEstado;
    document.getElementById("Municipio").value = jsonResponde[0].Municipio.sMunicipio;

   
    AgregarColonia(jsonResponde[0].Ubicacion);
}


function AgregarColonia(ubicaciones) {
    $("#SelectColonia").empty();
    $("#SelectColonia").append($("<option>", { value: "", text: "Elige una opcion" }));
    ubicaciones.forEach(colonias => {
        $("#SelectColonia").append($("<option>", { value: "", text: colonias.sUbicacion }));
    });
}


var input = document.getElementById("CodigoPostal");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getCodigioP();
       
    }
});



function AbrirModal() {

    var DescripcionId = $("#SelectDescripcion").val();
    alert(DescripcionId);
    if (DescripcionId == "0") {
        alert("Elige una descripcion");
    }
    else {

        postidDescripcion(DescripcionId);
        $("Modal").modal("show");

    }

    
}


//Cotizaciones
function postidDescripcion(id) {
    var url = "https://api-test.aarco.com.mx/api-examen/api/examen/crear-peticion" ;
 
    $.ajax({
        url: url,
        dataType: "json",
        data: JSON.stringify({
            DescripcionId: id
        }),
        contentType: "application/json",
        type: "post",
        success: getCotizacion,
        error: error => alert(error)
    });
}

function getCotizacion(responde) {

    var url = "https://api-test.aarco.com.mx/api-examen/api/examen/peticion/" + responde;
    $.ajax({
        url: url,
        dataType: "json",
        contentType: "application/json",
        type: "get",
        success: MostrarCotizaciones,
        error: error => alert(error)
    });

}


function MostrarCotizaciones(responde) {
   // console.log(responde  ); saber si me responde bien 
    console.log(responde);
    var prueba = JSON.stringify(responde.aseguradoras);
    console.log(prueba);
    responde.aseguradoras.forEach(cotizacion => {
       
        var tarjetaAseguradora = '<div class="col-sm-3">\
            < div class="card" style = "width: 18rem;" >\
        <img src="'+getImageforFile( cotizacion.AseguradoraId)+'" class="card-img-top" alt="...">\
                <div class="card-body">\
                    <h5 class="card-title">Card title</h5>\
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>\
                </div>\
                <ul class="list-group list-group-flush">\
                    <li class="list-group-item">Cras justo odio</li>\
                    <li class="list-group-item">Dapibus ac facilisis in</li>\
                    <li class="list-group-item">Vestibulum at eros</li>\
                </ul>\
                <div class="card-body">\
                    <a href="#" class="card-link">Card link</a>\
                    <a href="#" class="card-link">Another link</a>\
                </div>\
            </div>\
        </div>';
       

        
    });

    for (cotizacion in responde.aseguradoras) {
        console.log(cotizacion);
    }
}


function getImageforFile(AseguradoraId) {
    console.log(AseguradoraId);
    if (AseguradoraId==1) {
        return "~/Resources/img/AXA.png";
    }
}



