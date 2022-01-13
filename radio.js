/* 
    -----------------------------------------------
    Programa: radio.js
    Autor: Luis G.L. (luisgulo@gmail.com)
    Version: 1.0
    MAIN - PROGRAMA PRINCIPAL
    Se inicia automaticamente en la carga del html
    -----------------------------------------------
*/
    // Variables globales
    let PosEmisora = 0; 
    let Sonando = false;
    let r="./logos/"; // Ruta de logotipos
    // Array para gestion Emisoras
    const eNombre = [];
    const eUrl = [];
    const eImg = [];
    // LLamada a funciones para inicializar la Radio
    CargarArray();
    EmisoraActiva();
// ----- Fin del programa principal -----------------------------------------


// ----- FUNCIONES ----------------------------------------------------------
function Avanzar() {
    // Incrementamos en uno la posicion de la emisora 
    // Revisamos 'desbordamiento' de la posicion y recargamos la emisora activa
    PosEmisora++;
    if (PosEmisora >= eNombre.length ) {
        PosEmisora = 0;
    };
    EmisoraActiva();
};

function Retroceder() {
    // Retrocedemos en uno la posicion de la emisora 
    // Revisamos 'desbordamiento' de la posicion y recargamos la emisora activa    
    PosEmisora = PosEmisora - 1;
    if (PosEmisora < 0 ) {
        PosEmisora = eNombre.length - 1;
    };
    EmisoraActiva();   
};

function AlternarPlay() {
  // Ocultar/Mostrar los botones de Play-Pause
  // Ademas debemos para o iniciar el sonido
  if (Sonando) {
    Sonando=false;
    document.getElementById("BotonPlay").hidden=false;
    document.getElementById("BotonPause").hidden=true;
    document.getElementById("UrlEmisora").pause();
  } 
  else {
    Sonando=true;    
    document.getElementById("BotonPlay").hidden=true;
    document.getElementById("BotonPause").hidden=false;
    document.getElementById("UrlEmisora").play();
  };
};

function CargarArray() {
    // Cargar en memoria la lista de Emisoras deseadas
    eNombre[0]="Kiss FM";
    eUrl[0]="https://kissfm.kissfmradio.cires21.com/kissfm.mp3";
    eImg[0]="kissfm.png";
    eNombre[1]="Los 40 Principales";
    eUrl[1]="https://20103.live.streamtheworld.com/LOS40.mp3";
    eImg[1]="los40principales.jpg";
    eNombre[2]="Los 40 Classic";
    eUrl[2]="http://20103.live.streamtheworld.com:3690/LOS40_CLASSIC.mp3";
    eImg[2]="los40classic.png";
    eNombre[3]="Cadena 100";
    eUrl[3]="http://flucast-m02-04.flumotion.com/cope/cadena100.mp3";
    eImg[3]="cadena100.jpg";   
    eNombre[4]="Rock FM";
    eUrl[4]="https://rockfm-cope-rrcast.flumotion.com/cope/rockfm.mp3";
    eImg[4]="rockfm.jpg";  
    eNombre[5]="RNE Clasica";
    eUrl[5]="http://crtve-ice-edge-2002-fra-eco-cdn.cast.addradio.de/crtve/rnerc/main/mp3/high";
    eImg[5]="rneclasica.jpg";
    eNombre[6]="RNE (Madrid)";
    eUrl[6]="https://crtve-rne1-mad.cast.addradio.de/crtve/rne1/mad/mp3/high";
    eImg[6]="vacio.jpg";
    eNombre[7]="Onda Cero";
    eUrl[7]="https://wecast-b02-03.flumotion.com/promecal/radio1";
    eImg[7]="vacio.jpg";
    eNombre[8]="Europa FM";
    eUrl[8]="https://str1.mediatelekom.net:9950/stream";
    eImg[8]="vacio.jpg";

};

function ImprimirEmisoras() {
    // Imprimir en el html en la columna 2 la lista de emisoras    
    let texto="";
    l = document.getElementById("ListaEmisoras");
    l.innerHTML=texto;
    // bucle recorrer array emisoras           
    for (let i=0; i < eNombre.length; i++) {
        // La emisora activa se muestra en color diferente (azul) y con icono de altavoz
        // Hacemos que emisoras no activas sean clicables
        if (i == PosEmisora) {
            l.innerHTML +=  '<span id="0" style="color:blue"> ' + eNombre[i] + ' </span>' + ' &nbsp; &nbsp; <span id="1" style="color:blue" class="glyphicon glyphicon-volume-up"></span><br>';
        } else {
            l.innerHTML += '<span id="0" style="color:black" onclick="CambiarEmisora(' + i + ')"> ' + eNombre[i] + ' </span><br>';
        };        
    };    
};

function CambiarEmisora(nuevaEmisora) {
    PosEmisora = nuevaEmisora;
    EmisoraActiva();
};

function EmisoraActiva() {
    // Actualizar en el html la emisora activa
    document.getElementById("NombreEmisora").innerHTML=eNombre[PosEmisora];
    document.getElementById("UrlEmisora").src=eUrl[PosEmisora];
    document.getElementById("LogoEmisora").src= r + eImg[PosEmisora];
    ImprimirEmisoras();
};




