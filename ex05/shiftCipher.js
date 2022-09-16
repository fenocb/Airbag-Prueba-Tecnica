/**
 * Desplaza todas las letras de una oración "shift"(N) lugares hacia la derecha.
 * @param {string} phrase Frase a cifrar en minusculas
 * @param {Number} shift Numero a desplazar
 * @returns Cadena de texto desplazada
 */

const shiftCipher = (phrase, shift) => {
    //Arreglo que contiene el alfabeto ingles
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "z",
  ];
  // Conversion en arreglo
  const phraseArray = phrase.split("");
  // obtendra la frase cifrada
  var cipherPhrase = "";

  //Recorre todo el arreglo de la frase original
  for (let indexPhrase = 0; indexPhrase < phraseArray.length; indexPhrase++) {
    //Recorre todo el arreglo del alfabeto
    for (
      let indexAlphabet = 0;
      indexAlphabet < alphabet.length;
      indexAlphabet++
    ) {
        //Busca coincidencias entre las letras
      if (phraseArray[indexPhrase] == alphabet[indexAlphabet]) {
        //Reinicia el contador en caso que sobre pase longitud del alfabeto
        if (indexAlphabet + shift >= alphabet.length) {
          let overIndex = indexAlphabet + shift - alphabet.length;
          cipherPhrase += alphabet[overIndex];
        } else {
          cipherPhrase += alphabet[indexAlphabet + shift];
        }
        //En caso que sea un espacio
      } else if (phraseArray[indexPhrase] === " ") {
        cipherPhrase += " ";
        break;
      }
    }
  }
  return cipherPhrase;
};
console.log(shiftCipher("hola", 5));
