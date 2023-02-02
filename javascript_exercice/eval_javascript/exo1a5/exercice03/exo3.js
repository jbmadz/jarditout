//ici je declare que la variable "rtt" est fausse
 n = false;

//tant dis que la valeur "n" est fausse
while(n==false){

    //..je déclare les variables..
     prenom = prompt("Choisir le prénom");

    //..ici un tableau avec la variable "tab" afin d'énumerer les prénoms
     tab = ["Audrey", "Aurélien", "Flavien", 
    "Jérémy", 
    "Laurent", 
    "Melik", 
    "Nouara", 
    "Salem", 
    "Samuel", 
    "Stéphane"];

     i = tab.length;

    //..ici je viens lui dire que le resultat de ce tableau
     result = tab.filter(tab => tab !== prenom);
     o = result.length;
    
//alors, si la variable "i" est superieur a "o"
if(i > o){
    result.push('');

    //il affiche le resultat
    alert("Bravo vous avez trouvé un prénom "+result);

    //là je viens donner a la valeur "rtt" la condition "true"
    //pour dire qu'elle est vrai
     n = true;

    //..alors il affichera une erreur si la condition est fausse avec "rtt" comme
    //valeur "false"
}else{
    alert("Erreur : pas trouvé \n");
     n = false;
   
}
}

