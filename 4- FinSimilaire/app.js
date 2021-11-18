
// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui vous informe si les lettres(second arguments),
// correspondent à la fin du mot(premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".


// ----------------- CONSEILS -----------------


// La fonction "slice" permet de découper une chaine de caractère.
// Essayez cela : 
// console.log("hello".slice(2));

// La méthode length permet de donner la longueur d'une chaine.
// Essayez cela :
// console.log("hello".length);

// Mais il y a des dizaines de façon de résoudre cet algorithme(et les autres...),
// N'hésitez pas à le faire à votre façon et à TESTER vos idées(c'est important). 


function finSimilaire(str, fin) {

 if (str.slice(-2) === fin) {
   return "la fin est similaire"
 } else {
   return "la fin ne correspond pas"
 }
}

console.log(finSimilaire("ours", "rs"));


// ------------------------------------------------------------------------------


function finCommune (phrase, fin) {

  if ( phrase.slice(-4) === fin) {
    return "la fin est similaire"
  } else {
    return "la fin est différente"
  }


}

console.log(finCommune('cedric', 'dtic'));



function factorisation(n) {

  for ( i = 1 ; n > 1 ; n--) {
    i = i * n;
  }

  return i;
}

console.log(factorisation(5));



function inverse(str) {


  return str.split('').reverse().join('')

}

console.log(inverse("cedric guyot"));


function conversion(euro) {

  const conversFr = (euro * 6.55);
  return conversFr;


}

console.log(conversion(10));