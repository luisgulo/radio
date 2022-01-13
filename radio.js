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
    eUrl[0]="http://kissfm.kissfmradio.cires21.com/kissfm.mp3";
    eImg[0]="kissfm.jpg";
    eNombre[1]="Los 40 Principales";
    eUrl[1]="http://23543.live.streamtheworld.com/LOS40.mp3";
    eImg[1]="los40principales.jpg";
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




