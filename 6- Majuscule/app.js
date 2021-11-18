// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends une phrase en argument et qui retourne cette meme
// phrase avec la premiere lettre de chaque mots en Majuscule.

// ----------------- CONSEILS -----------------

// Fonctions utiles : 
// map(); méthode "callback", qui permet de traiter chaque élément d'un tableau et
// d'en retourner un nouveau avec les éléments modifiés.
// toUpperCase(); transforme en majuscule.
// toLowerCase(); pour transformer en minuscule.
// charAt(); pour sélectionner un caratère.
// split(); pour transformer string->tableau.
// replace(); pour remplacer une partie d'une chaine.



function maj(str) {

   const tableauMinus = str.toLowerCase().split(' ');
   const resultat = tableauMinus.map(function(valeur){
     return valeur.replace(valeur.charAt(0), valeur.charAt(0).toUpperCase())
   });

   return resultat.join(" ");  
  
 }

console.log(maj("Les sanglots longs des violons de l'automne..."));




