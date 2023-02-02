//je commence par lui demander un "nombre"
nombre = window.prompt("saisisez un nombre");
table_multiplication(nombre)

//ici je déclare une fonction "table"
function table_multiplication(nombre)
{

//ici, je viens déclarer la variable i 
var i;

//donc pour i égale a 0, i inferieur ou égale a 10
//et i qui prend + 1 a chaque tour..
for (i=0; i<=10; i++) {

   //..le "resultat" sera le "nombre" donner x "i"
   resultat=nombre*i;

//alors le programme affichera le "nombre" donner x "i" 
//et sera égale au resultat du "nombre" x "i"
document.write(nombre+" * "+i+ "=" +nombre*i+ "<br>" );}

}  
