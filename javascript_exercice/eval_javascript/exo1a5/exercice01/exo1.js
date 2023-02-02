//je commence par declarer les variables
let i = 0
let jeune = 0
let adulte = 0
let senior = 0
let centenaire = 0

//tant dis que la variable i est srictement inferieur a 100..
while (i < 100) {
    //ici je lui demande sa date de naissance 
   i = parseInt(prompt("quelle age avez vous ?"));

   //donc si i est strictement inferieur a 20ans ( i prend + 1) 
   if (i < 20){
      jeune =i++
      //alors on affiche ça..
    alert("jeune de moins de 20ans");

   //ici, si i a une valeur strictement supeieur a 40
   }if (i > 40) {
      adulte =i++
      //alors il affiche ça..
      alert("adulte de plus de 40ans");

   //là je lui dis, si on donne a i une valeur superieur
   // ou égale 20 et i inferieur ou egale a 40
   }if (i >= 20 && i <= 40){ 
      senior =i++
      //alors le programme afiche ça..
      alert("adulte entre 20 et 40ans");

   //par contre, si i est strictement superieur 
   //ou égale a 100   
   }
   if (i >= 100) {
      centenaire =i++
      //alors on affiche "centenaire" et le programme s'arrete.
      alert("centenaire");
   }   

}



