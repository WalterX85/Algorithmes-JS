// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va retourner une phrase. 
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
// Bonne chance.

// ----------------- CONSEILS -----------------

// La fonction join(), permet de transformer un tableau en chaine de caractère.
// La fonction split(), permet de transformer une chaine de caractère en tableau.
// La fonction reverse(), permet d'inverser les éléments d'un tableau.


//--------------------- Ma proposition-----------------------------------

function retourneLaPhrase(str) {

  const words = str.split(' ');
  console.log(words);

  const chars = str.split('');
  console.log(chars);

  const reversed = chars.reverse();
  console.log(reversed);

  console.log(reversed.join(''));
}

console.log(retourneLaPhrase("Bonjour à tous"));


// -----------------------Solution--------------------------------

function retourneLaPhrase(str) {

  return str.split('').reverse().join('')

}

console.log(retourneLaPhrase('Hello world'))
