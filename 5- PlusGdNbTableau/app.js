function plusGrandNb(arr) {

  let resultat = [];

  for (let i = 0; i < arr.length; i++) {
    nbMax = arr [i][0];

    for( let n = 0; n < arr[i].length; n++){
      if( arr[i][n] > nbMax){
        nbMax = arr[i][n];
      }
    }
    resultat.push(nbMax);
  }
  return resultat;
}

console.log(plusGrandNb([
                        [1, 5, 8, 3],
                        [15, 47, 88, 26],
                        [32, 35, 37, 39],
                        [3000, 1001, 857, 1]
                      ]));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau composé de plusieurs tableaux en 
// argument et qui retourne un seul tableau qui contient la valeur maximale de 
// chaque tableaux.

// ----------------- CONSEILS -----------------

// Une boucle "for" permet d'itérer dans un tableau.
// Vous n'êtes pas limité à une boucle "for", vous pouvez en utiliser plusieurs...

// la méhode [].push(), pour pousser un élément dans un tableau;
// Testez :
// var arrTest = [0,10];
// arrTest.push(80);
// console.log(arrTest);



function conversion(euro) {

  const conversFr = (euro * 6.55);

  return conversFr;


}

console.log(conversion(134));



function retourne (word) {


  return word.split('').reverse().join('')

}

console.log(retourne('Gwendoline'));



function factorisation(n) {

  for( i = 1 ; n > 1 ; n--) {
    i = n * i;
  }

  // 1ere 5 x 1
  // 2eme 4 x 5
  // 3eme 3 x 20
  // 2 x 60
  // 1 x 120

  return i

}

console.log(factorisation(5));

