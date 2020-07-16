function To(scene) {   
    var x = location.href = scene;
    document.body.innerHTML = x;
}
function parking(n) {
    if (n === 0) {
        document.getElementById('scnParqueadero').setAttribute('visible', 'true');
        document.getElementById('scnParqueaderoL1').setAttribute('visible', 'false');
        document.getElementById('scnParqueaderoL2').setAttribute('visible', 'false');
    }
    if (n === 1) {
        document.getElementById('scnParqueadero').setAttribute('visible', 'false');
        document.getElementById('scnParqueaderoL1').setAttribute('visible', 'true');
    }
    if (n === 2) {
        document.getElementById('scnParqueadero').setAttribute('visible', 'false');
        document.getElementById('scnParqueaderoL2').setAttribute('visible', 'true');
    }
}
function administration(n){
    if (n === 0) {
        document.getElementById('scnAdministracion').setAttribute('visible', 'true');
        document.getElementById('scnOficinas').setAttribute('visible', 'false');
    }
    if (n === 1) {
        document.getElementById('scnAdministracion').setAttribute('visible', 'false');
        document.getElementById('scnOficinas').setAttribute('visible', 'true');
    }
}

function salonesPre(n){
    document.getElementById('scnSalonesPrescolar').setAttribute('visible', 'false');
    if (n === 0) {
        document.getElementById('scnSalonesPrescolar').setAttribute('visible', 'true');
        document.getElementById('scnYear1').setAttribute('visible', 'false');
        document.getElementById('scnYear2').setAttribute('visible', 'false');
        document.getElementById('scnYear3').setAttribute('visible', 'false');
        document.getElementById('scnReception').setAttribute('visible', 'false');
    }
    if (n === 1){
        document.getElementById('scnReception').setAttribute('visible', 'true');
    }
    if (n === 2){
        document.getElementById('scnYear1').setAttribute('visible', 'true');
    }
    if (n === 3){
        document.getElementById('scnYear2').setAttribute('visible', 'true');
    }
    if (n === 4){
        document.getElementById('scnYear3').setAttribute('visible', 'true');
    }
}

function biblioteca(n){
    if(n === 1){
       document.getElementById('scnBiblioteca1').setAttribute('visible', 'true');
       document.getElementById('scnBiblioteca2').setAttribute('visible', 'false'); 
    }
    if(n === 2){
       document.getElementById('scnBiblioteca1').setAttribute('visible', 'false');
       document.getElementById('scnBiblioteca2').setAttribute('visible', 'true'); 
    }
}

function patioCaf(n){
    document.getElementById('scnPatioCafeteria').setAttribute('visible', 'false');
    if (n === 0) {
        document.getElementById('scnPatioCafeteria').setAttribute('visible', 'true');
        document.getElementById('scnSalonMusica').setAttribute('visible', 'false');
        document.getElementById('scnCafeteria').setAttribute('visible', 'false');
        document.getElementById('scnVoleibol').setAttribute('visible', 'false');
        document.getElementById('scnFutbol').setAttribute('visible', 'false');
        document.getElementById('scnBasquetbol').setAttribute('visible', 'false');
    }
    if (n === 1){
        document.getElementById('scnSalonMusica').setAttribute('visible', 'true');
    }
    if (n === 2){
        document.getElementById('scnCafeteria').setAttribute('visible', 'true');
    }
    if (n === 3){
        document.getElementById('scnVoleibol').setAttribute('visible', 'true');
        document.getElementById('scnFutbol').setAttribute('visible', 'false');
        document.getElementById('scnBasquetbol').setAttribute('visible', 'false');
    }
    if (n === 4){
        document.getElementById('scnFutbol').setAttribute('visible', 'true');
        document.getElementById('scnBasquetbol').setAttribute('visible', 'false');
        document.getElementById('scnVoleibol').setAttribute('visible', 'false');
    }
    if (n === 5){
        document.getElementById('scnBasquetbol').setAttribute('visible', 'true');
        document.getElementById('scnFutbol').setAttribute('visible', 'false');
        document.getElementById('scnVoleibol').setAttribute('visible', 'false');
    }
}

function BachilleratoUno(n){
    document.getElementById('scnPatio1Bachillerato').setAttribute('visible', 'false');
    if (n === 0) {
        document.getElementById('scnPatio1Bachillerato').setAttribute('visible', 'true');
        document.getElementById('scnMathematics').setAttribute('visible', 'false');
        document.getElementById('scnMath&chemistry').setAttribute('visible', 'false');
        document.getElementById('scnBiologia').setAttribute('visible', 'false');
        document.getElementById('scnScienceLab').setAttribute('visible', 'false');
        document.getElementById('scnArtRoom').setAttribute('visible', 'false');
    }
    if (n === 1){
        document.getElementById('scnMathematics').setAttribute('visible', 'true');
    }
    if (n === 2){
        document.getElementById('scnMath&chemistry').setAttribute('visible', 'true');
    }
    if (n === 3){
        document.getElementById('scnBiologia').setAttribute('visible', 'true');
    }
    if (n === 4){
        document.getElementById('scnScienceLab').setAttribute('visible', 'true');
    }
    if (n === 5){
        document.getElementById('scnArtRoom').setAttribute('visible', 'true');
    }
}
function BachilleratoDos(n){
    document.getElementById('scnPatio2Bachillerato').setAttribute('visible', 'false');
    if (n === 0) {
        document.getElementById('scnPatio2Bachillerato').setAttribute('visible', 'true');
        document.getElementById('scnBusiness').setAttribute('visible', 'false');
        document.getElementById('scnHistory').setAttribute('visible', 'false');
        document.getElementById('scnDanza').setAttribute('visible', 'false');
        document.getElementById('scnTok').setAttribute('visible', 'false');
    }
    if (n === 1){
        document.getElementById('scnBusiness').setAttribute('visible', 'true');
    }
    if (n === 2){
        document.getElementById('scnHistory').setAttribute('visible', 'true');
    }
    if (n === 3){
        document.getElementById('scnDanza').setAttribute('visible', 'true');
    }
    if (n === 4){
        document.getElementById('scnTok').setAttribute('visible', 'true');
    }
}

function PrimariaUno(n){
    document.getElementById('scnPatio1Primaria').setAttribute('visible', 'false');
    if (n === 0) {
        document.getElementById('scnPatio1Primaria').setAttribute('visible', 'true');
        document.getElementById('scnYear4').setAttribute('visible', 'false');
        document.getElementById('scnYear5').setAttribute('visible', 'false');
        document.getElementById('scnYear6').setAttribute('visible', 'false');
        document.getElementById('scnMac').setAttribute('visible', 'false');
    }
    if (n === 1){
        document.getElementById('scnYear4').setAttribute('visible', 'true');
    }
    if (n === 2){
        document.getElementById('scnYear5').setAttribute('visible', 'true');
    }
    if (n === 3){
        document.getElementById('scnYear6').setAttribute('visible', 'true');
    }
    if (n === 4){
        document.getElementById('scnMac').setAttribute('visible', 'true');
    }
}

function PrimariaDos(n){
    document.getElementById('scnPatio2Primaria').setAttribute('visible', 'false');
    if (n === 0) {
        document.getElementById('scnPatio2Primaria').setAttribute('visible', 'true');
        document.getElementById('scnSpanish1').setAttribute('visible', 'false');
        document.getElementById('scnSpanish2').setAttribute('visible', 'false');
        document.getElementById('scnEspañol').setAttribute('visible', 'false');
        document.getElementById('scnSpanish3').setAttribute('visible', 'false');
        document.getElementById('scnEnglish').setAttribute('visible', 'false');
        document.getElementById('scnAuditorio').setAttribute('visible', 'false');
        
        document.getElementById('scnRadio').setAttribute('visible', 'false');
        document.getElementById('scnRadio2').setAttribute('visible', 'false');
    }
    if (n === 1){
        document.getElementById('scnSpanish1').setAttribute('visible', 'true');
    }
    if (n === 2){
        document.getElementById('scnSpanish2').setAttribute('visible', 'true');
    }
    if (n === 3){
        document.getElementById('scnEspañol').setAttribute('visible', 'true');
    }
    if (n === 4){
        document.getElementById('scnSpanish3').setAttribute('visible', 'true');
    }
    if (n === 5){
        document.getElementById('scnEnglish').setAttribute('visible', 'true');
    }
    if (n === 6){
        document.getElementById('scnAuditorio').setAttribute('visible', 'true');
    }
    if (n === 8){
        document.getElementById('scnRadio').setAttribute('visible', 'true');
        document.getElementById('scnRadio2').setAttribute('visible', 'false');
    }
    if (n === 9){
        document.getElementById('scnRadio2').setAttribute('visible', 'true');
        document.getElementById('scnRadio').setAttribute('visible', 'false');
    }
}

function PatioUno(n){
    document.getElementById('scnPatio1').setAttribute('visible', 'false');
    if (n === 0) {
        document.getElementById('scnPatio1').setAttribute('visible', 'true');
        document.getElementById('scnKids').setAttribute('visible', 'false');
        document.getElementById('scnGym').setAttribute('visible', 'false');
        document.getElementById('scnFonoaudiologia').setAttribute('visible', 'false');
    }
    if (n === 1){
        document.getElementById('scnKids').setAttribute('visible', 'true');
    }
    if (n === 2){
        document.getElementById('scnGym').setAttribute('visible', 'true');
    }
    if (n === 3){
        document.getElementById('scnFonoaudiologia').setAttribute('visible', 'true');
    }
}