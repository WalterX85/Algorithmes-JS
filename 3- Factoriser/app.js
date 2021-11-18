// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va factoriser le nombre qu'on
// lui passe en argument.
// Pour rappel lorsqu'on factorise 5 :
// 5! = 1 * 2 * 3 * 4 * 5 = 120.
// C'est le produit de tous les entiers qui précèdent ou qui sont
// égaux à N, ici 5.

// ----------------- CONSEILS -----------------

// La boucle "for" est ton amie.


function factoriser(num) {

  for(i = 1; num > 1; num--) {
    i = num * i;
  }

return i;
}

  // 1ere boucle --> 5 x 1;  (num * i)
  // 2eme boucle --> 4 x 5;
  // 3eme boucle --> 3 x 20;
  // 4eme boucle --> 2 x 60;
  // 5eme boucle --> 1 x 120;

console.log(factoriser(5));

// ----------------------------------------------------
// Bac à sable.

function factorise(nb) {

  for( i = 1 ; nb > 1 ; nb--) {
    i = i * nb;
  }

  return i;

}

console.log(factorise(6));


function facto (n) {


  for ( i = 1 ; n > 1 ; n-- ) {
    i = i * n;
  }

  return i;

}

console.log(facto(7));


function retournePhrase (str) {

  return str.split('').reverse().join('')

}

console.log(retournePhrase("Hello World"));


function conversion(euro) {

  const conversFr = (euro * 6.55);
  return conversFr;


}

console.log(conversion(50));
