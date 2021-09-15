var arreglo = [{
    nombreCarpeta:'VejaDelivery',
    archivoInicial:'Veja',
    indice:23
},{
    nombreCarpeta:'FacturasFerreteriaUnion',
    archivoInicial:'ferre',
    indice:4
},{
    nombreCarpeta:'MyTienda',
    archivoInicial:'tienda',
    indice:13
},{
    nombreCarpeta:'VSLM',
    archivoInicial:'calculadora',
    indice:4
},{
    nombreCarpeta:'QuintexOfertas',
    archivoInicial:'ofertas',
    indice:5
},{
    nombreCarpeta:'gestor',
    archivoInicial:'gestor',
    indice:5
},{
    nombreCarpeta:'tareas',
    archivoInicial:'tarea',
    indice:22
},{
    nombreCarpeta:'proyecto redes 1',
    archivoInicial:'redes',
    indice:9
},{
    nombreCarpeta:'bases',
    archivoInicial:'bases',
    indice:8
},{
    nombreCarpeta:'spotify',
    archivoInicial:'Captura de pantalla',
    indice:16
}]

var lenguajes =[{
    nombreLenguaje:"Javascript",
    imagen:"JavaScript.png",
    titulo:"Este es el lenguaje que mas manejo",
    descripcion:"Desde mis inicios en la parte programación web, desde la parte de Frontend y en backend."
}];

// $(document).ready(function() {
//     console.log(lenguajes);
//     for(var i=0;i<lenguajes.length;i++){
//         $(".owl-stage").append($(`
//             <div class="owl-item" style="width: 308px; margin-right: 30px;">
//                 <div class="image">
//                     <img src="img/lenguajes/${lenguajes[i].imagen}" alt="">
//                     <div class="featured-button button">
//                         <a href="#projects">Proyectos a continuación</a>
//                     </div>
//                 </div>
//                 <div class="text-content">
//                     <h4>${lenguajes[i].nombreLenguaje}</h4>
//                     <span>${lenguajes[i].titulo}</span>
//                     <p>${lenguajes[i].descripcion}</p>
//                 </div>
//             </div>
//         `));
//     }
// })

function VerDetalleProyect(proyecto){
    $(".carousel-inner").html($(``));
    console.log(arreglo[proyecto].nombreCarpeta,proyecto);
    var indice=0;
    for(var i=0;i<arreglo[proyecto].indice;i++){
        $(".carousel-inner").append($(`
            <a href="img/proyectos/${arreglo[proyecto].nombreCarpeta}/${arreglo[proyecto].archivoInicial} ${i+1}.PNG" class="col-md-3" data-lightbox="image"><img src="img/proyectos/${arreglo[proyecto].nombreCarpeta}/${arreglo[proyecto].archivoInicial} ${i+1}.PNG" class="imgModalProyect" alt="image 1"></a>
        `));
    }
    
}