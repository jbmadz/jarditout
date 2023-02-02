//pour commencer je déclare les variables et 
//leur condittions

let PU = prompt("indiquez votre prix unitaire");
let QTECOM = prompt("saisisez la Quantité");
let TOT = (PU*QTECOM);
var REM = 0;

// là je viens lui dire, si le prix unitaire "PU" x la quantité commandé "QTECOM"
//est superieur ou égale 100 et celle-ci aussi inferieur ou
//égale a 200 alors il applique une remise de 5%..
if(TOT >= 100 && TOT <= 200){
    var REM = 0.05;

//et que si "TOT" prx unt x qte cmd est superieur a 200 alors il applique 
//une remise de 10%
}else if(TOT > 200){
    var REM = 0.1;
}
//ici, je lui dis que la valeur "TOTREM" est égale a 
//"TOT" multiplié par 1 moins la "REMise"
var TOTREM = TOT*(1-REM);

//dans ce cas ci la valeur PORT sera égale a 2% multiplié par "TOTREM" 
var PORT = 0.02*TOTREM;

//..donc si "TOTREM" est strictement supperieur a 500 alors on 
//applique pas de pourcentage
if(TOTREM > 500){
    var PORT = 0;
}
//et que si le pourcentage indiqué est strictement inferieur a 6 avec et
//..un "TOTREM" inferieur ou égale a 500 avec PORT égale 6
if(PORT < 6 && TOTREM <= 500){
    var PORT = 6;
}
//..là je viens donner une variable unique "PAP" qui sera égale aux deux varaible ("TOTREM" et "PORT")
var PAP = TOTREM + PORT;

//alors il affiche le resultat..
alert(PAP);
