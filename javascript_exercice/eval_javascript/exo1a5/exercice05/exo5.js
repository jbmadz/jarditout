//pour commencer je viens déclarer les varaibles..
let validation = document.getElementById('bouttonEnvoyer');

let nom = document.getElementById('nom');
let nomM = document.getElementById('nomManquant');
let nomV = /^[a-zA-ZéèîïeÉÈÎï][a-zéèêàçîï]+([-'\s[a-zA-ZéèîïeÉÈÎï][a-zéèêàçîï]+)?/;
validation.addEventListener('click', fValid1);

//..ici je fais appel a une fonction, je lui dis..
function fValid1(e){

    //si le nom a une valeur égale a rien..
   if (nom.value === "") {

        //.."preventDefault" sert a dire que si l'ellement demander
        //n'est pas bien appliquer, la tache ne sera pas executée.
       e.preventDefault();

       //..alors il affiche "nom manquant" avec un "textContent"
       //pour afficher l'ellement ( en couleur rouge)
       nomM.textContent = "case vide";
       nomM.style.color = "red";

       //là je lui dis si non si les nom entrées sont "false"
   }else if (nomV.test(nom.value) == false) {

        //..toujours accompagnée du "preventDefault"..
       e.preventDefault();

       //..alors il affiche "nom incorrect" (en couleur jaune)
       nomM.textContent = "Nom incorrect";
       nomM.style.color = "jaune";
   } else {

   }
}

//comme avec les "nom" ici je viens déclarer les variables "prenom"
//avec leur condittions..
let prenom = document.getElementById('prenom');
let prenomM = document.getElementById('prenomManquant');
let prenomV = /^[a-zA-ZéèîïeÉÈÎï][a-zéèêàçîï]+([-'\s[a-zA-ZéèîïeÉÈÎï][a-zéèêàçîï]+)?/;
validation.addEventListener('click', fValid2);

//ensuite la fonction qui dit..
function fValid2(e){

    // si la valeur du "prenom" est égale a rien encore une fois..
   if (prenom.value === "") {
       e.preventDefault();

       //alors il affiche "prenom monquant" (en couleur rouge)
       prenomM.textContent = "case vide";
       prenomM.style.color = "red";

       //si non si le "prenom" a une valeur "false" donc faux
   }else if (prenomV.test(prenom.value) == false) {
       e.preventDefault();

       //alors "textContent" il affiche "prenom incorrect"
       //en (en couleur jaune)
       prenomM.textContent = "Prénom incorrect";
       prenomM.style.color = "jaune";
   } else {

   }
}

//pareil, je déclare les varaibles..
let date = document.getElementById('date');
let dateM = document.getElementById('dateManquant');
validation.addEventListener('click', fValid3);

//la fonction et sa condition
function fValid3(e){

    //si la date a une valeur égale a rien..
   if (date.value === "") {

        //"preventDefault" qui reviens.
       e.preventDefault();

       //..alors il affiche "Date manquante" (en couleur rouge)
       dateM.textContent = "case vide";
       dateM.style.color = "red";
   }
    if (date.value == date) {

        date.textContent = "date incorrect"
        date.style.color = "green"

   } else {

   }
}

//une fois de plus les varaibles..
let codep = document.getElementById('codep');
let codepM = document.getElementById('codepManquant');
let codepV = /^([0-9]{5})$/;
validation.addEventListener('click', fValid4);

//..ici la fonction
function fValid4(e){

     //je viens lui dire ici que si le code postale a une valeur
     //égale a rien..
   if (codep.value === "") {

       //.."preventDefault" pour birn executée la tache
       e.preventDefault();

       //..alors il affiche "case vide" (en rouge)
       codepM.textContent = "case vide";
       codepM.style.color = "red";

       //ici je lui dis si non si, le code postale est "faux"..
   }else if (codepV.test(codep.value) == false) {
       e.preventDefault();

       //..alors il affiche "code incorrecte" (en couleur jaune)
       //toujours avec un "textcontent"
       codepM.textContent = "code incorrect";
       codepM.style.color = "jaune";
   } else {

   }
}

//les variables..
let mail = document.getElementById('mail');
let mailM = document.getElementById('mailManquant');
let mailV = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
validation.addEventListener('click', fValid5);

//la fonction
function fValid5(e){

    // le si, mail a une valeur égale a rien..
   if (mail.value === "") {
       e.preventDefault();

       //alors il affiche "case vide"
       mailM.textContent = "case vide"
       mailM.style.color = "red";

       //si non si le mail est faux "false"
   }else if (mailV.test(mail.value) == false) {
       e.preventDefault();

       //alors il indique un "mail incorrect"
       mailM.textContent = "Mail incorrect";
       mailM.style.color = "jaune";
   } else {

   }
}

let adress = document.getElementById('adress');
let adressP = document.getElementById('adressManquant');
let adressT = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
validation.addEventListener('click', fValid6);

//pareil je déclare la fonction
function fValid6(e){
     
    //si l'adress a une valeur nul 
    if (adress.value === "") {

        //toujous le "preventDefault" pour bien executée
        e.preventDefault();
        
        //alors de meme il affiche "case vide" pareil en 
        //(couleur rouge)
        adressP.textContent = "case vide";
        adressP.style.color = "red";
    }
    //dans le cas contraire..
    if (adressP.test(adress.value) == false) {
        e.preventDefault();

        //il affiche "adress incorrect"
        adressP.textContent = "adess incorrect";
        adressP.style.color = "jaune";

    } else {

    }

}