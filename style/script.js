
function Mostrar(){ 
    document.getElementById('instructivo').style.display="block";
}
function Ocultar(){
    document.getElementById('instructivo').style.display="none";
}
var s = new Number(0);
obtenerLocalStorage();
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
        document.getElementById('scnYear1').setAttribute('visible', 'false');
        document.getElementById('scnYear2').setAttribute('visible', 'false');
        document.getElementById('scnYear3').setAttribute('visible', 'false');
        document.getElementById('scnReception').setAttribute('visible', 'true');
    }
    if (n === 2){
        document.getElementById('scnYear2').setAttribute('visible', 'false');
        document.getElementById('scnYear3').setAttribute('visible', 'false');
        document.getElementById('scnReception').setAttribute('visible', 'false');
        document.getElementById('scnYear1').setAttribute('visible', 'true');
    }
    if (n === 3){
        document.getElementById('scnYear1').setAttribute('visible', 'false');
        document.getElementById('scnYear3').setAttribute('visible', 'false');
        document.getElementById('scnReception').setAttribute('visible', 'false');
        document.getElementById('scnYear2').setAttribute('visible', 'true');
    }
    if (n === 4){
        document.getElementById('scnYear1').setAttribute('visible', 'false');
        document.getElementById('scnYear2').setAttribute('visible', 'false');
        document.getElementById('scnReception').setAttribute('visible', 'false');
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
        document.getElementById('scnFutbol').setAttribute('visible', 'false');
    }
    if (n === 3){
        document.getElementById('scnVoleibol').setAttribute('visible', 'true');
        document.getElementById('scnFutbol').setAttribute('visible', 'false');
        document.getElementById('scnBasquetbol').setAttribute('visible', 'false');
    }
    if (n === 4){
        document.getElementById('scnCafeteria').setAttribute('visible', 'false');
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
        document.getElementById('scnMathematics').setAttribute('visible', 'true');        document.getElementById('scnMath&chemistry').setAttribute('visible', 'false');
        document.getElementById('scnBiologia').setAttribute('visible', 'false');
    }
    if (n === 2){
        document.getElementById('scnMath&chemistry').setAttribute('visible', 'true');
        document.getElementById('scnMathematics').setAttribute('visible', 'false');
        document.getElementById('scnBiologia').setAttribute('visible', 'false');
    }
    if (n === 3){
        document.getElementById('scnBiologia').setAttribute('visible', 'true');
        document.getElementById('scnMathematics').setAttribute('visible', 'false');
        document.getElementById('scnMath&chemistry').setAttribute('visible', 'false');
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
        document.getElementById('scnHistory').setAttribute('visible', 'false');
        document.getElementById('scnTok').setAttribute('visible', 'false');
    }
    if (n === 2){
        document.getElementById('scnHistory').setAttribute('visible', 'true');
        document.getElementById('scnBusiness').setAttribute('visible', 'false');
        document.getElementById('scnTok').setAttribute('visible', 'false');
    }
    if (n === 3){
        document.getElementById('scnDanza').setAttribute('visible', 'true');
    }
    if (n === 4){
        document.getElementById('scnTok').setAttribute('visible', 'true');
        document.getElementById('scnBusiness').setAttribute('visible', 'false');
        document.getElementById('scnHistory').setAttribute('visible', 'false');
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
        
        document.getElementById('scnYear5').setAttribute('visible', 'false');
        document.getElementById('scnYear6').setAttribute('visible', 'false');
        document.getElementById('scnYear4').setAttribute('visible', 'true');
    }
    if (n === 2){
        
        document.getElementById('scnYear4').setAttribute('visible', 'false');
        document.getElementById('scnYear6').setAttribute('visible', 'false');
        document.getElementById('scnYear5').setAttribute('visible', 'true');
    }
    if (n === 3){
        
        document.getElementById('scnYear4').setAttribute('visible', 'false');
        document.getElementById('scnYear5').setAttribute('visible', 'false');
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
         document.getElementById('scnEnglish').setAttribute('visible', 'false');
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
        document.getElementById('scnSpanish1').setAttribute('visible', 'false');
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
var i = new Number(0);
function menu(n){
    i+=n;
    if(i%2 === 0){
        document.getElementById('menu').setAttribute('scale',{x: 0, y: 0, z:0});
    }else{
        document.getElementById('menu').setAttribute('scale',{x: 1, y: 1, z:1});
    }
}
function GuardarLocalStorage(n, x){
    localStorage.setItem("scn",n);
    To(x);
}
function obtenerLocalStorage(){
    if(localStorage.getItem("scn")){
        let scena = localStorage.getItem("scn");
        console.log(scena);
        if(scena==="1"){
            patioCaf(4)
            changeButton('caf',4)
            localStorage.setItem("scn",0)
        }
        else if(scena==="2"){
            patioCaf(2)
            localStorage.setItem("scn",0)
        }
        else if(scena==="3"){
            PatioUno(1)
            localStorage.setItem("scn",0)
            changeButton('fuente',1)
        }
        else if(scena==="4"){
            patioCaf(1)
            localStorage.setItem("scn",0)
        }
        else if(scena==="5"){
            BachilleratoUno(5)
            localStorage.setItem("scn",0)
        }else if(scena==="6"){
            PrimariaDos(5);
            localStorage.setItem("scn",0)
        }else if(scena==="7"){
            BachilleratoDos(4)
            localStorage.setItem("scn",0)
        }else if(scena==="8"){
            BachilleratoUno(1)
            changeButton('bachi1',4)
            localStorage.setItem("scn",0)
        }else if(scena==="9"){
            PrimariaDos(8)
            changeButton('prim2',4)
            localStorage.setItem("scn",0)
        }else if(scena==="10"){
            patioCaf(2)
            changeButton('caf',3)
            localStorage.setItem("scn",0)
        }else if(scena==="11"){
            BachilleratoDos(3)
            changeButton('bachi2',5)
            localStorage.setItem("scn",0)
        }
        else if(scena==="12"){
            BachilleratoUno(4)
            changeButton('bachi1',9)
            localStorage.setItem("scn",0)
        }
        
    }
    else{
        console.log("No hay entradas e el localstorage");
    }
}
function changeButton(scene,n){
    s+=n;
    switch (scene){
        case "fuente":
            if(s<0)
            To('administration.html');
            else if(s>=0&&s<2)
            PatioUno(s)
            else
            To('childPark.html')  
        break;
        case "pres":
            if(s<0)
            To('childPark.html') 
            else if(s>=0&&s<5)
            salonesPre(s)
            else
            To('primaryOne.html')
        break;
        case "prim1":
            if(s<0)
            To('preschool.html')
            else if(s>=0&&s<4)
            PrimariaUno(s)
            else
            GuardarLocalStorage(4,'coffeYard.html')
        break;
        case "bachi1":
            //console.log("s=="+s);    
            if(s<0)
            GuardarLocalStorage(4,'coffeYard.html')
            else if(s===0)
            BachilleratoUno(5)
            else if(s===1)
            BachilleratoUno(0)
            else if(s===2)
            GuardarLocalStorage(6,'primaryTwo.html')
            else if(s===3)
            GuardarLocalStorage(7,'highSchoolTwo.html')
            else if(s===4)
            BachilleratoUno(1)
            else if(s===5)
            BachilleratoUno(2)
            else if(s===6)
            BachilleratoUno(3)
            else if(s===7)
            To('library.html')
            else if(s===8)
            GuardarLocalStorage(11,'highSchoolTwo.html')
            else if(s===9)
            BachilleratoUno(4)
            else if(s===10)
            To('parking.html')
        break;
        case "prim2":
            if(s<0)
            To('highSchoolOne.html')
            else if(s===0)
            PrimariaDos(5)
            else if(s===1)
            PrimariaDos(1)
            else if(s===2)
            GuardarLocalStorage(7,'highSchoolTwo.html')
            else if(s===3)
            To('library.html')
            else if(s===4)
            PrimariaDos(8)
            else if(s===5)
            GuardarLocalStorage(10,'coffeYard.html')
        break;
        case "bachi2":
            if(s<0)
            GuardarLocalStorage(6,'primaryTwo.html')
            else if(s===0)
            BachilleratoDos(4);
            else if(s===1)
            BachilleratoDos(2);
            else if(s===2)
            BachilleratoDos(1);
            else if(s===3)
            GuardarLocalStorage(8,'highSchoolOne.html')
            else if(s===4)
            GuardarLocalStorage(1,'coffeYard.html')   
            else if(s===5)
            BachilleratoDos(3)
            else if(s===6)
            GuardarLocalStorage(12,'highSchoolOne.html')            
        break;
        case "caf":
            if(s<0)
            To('primaryOne.html')
            else if(s===0)
            patioCaf(1);
            else if(s===1)
            GuardarLocalStorage(5,'highSchoolOne.html')
            else if(s===2)
            GuardarLocalStorage(9,'primaryTwo.html')
            else if(s===3)
            patioCaf(2)
            else if(s>=4&&s<=5)
            patioCaf(s)
            else if(s===6)
            patioCaf(3)
            else if(s===7)
            GuardarLocalStorage(11,'highSchoolTwo.html')
        break;
            
        
    }
}