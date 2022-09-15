/**
 * Funcion encargada de
 * imprimir todas las combinaciones de tres dígitos distintos de manera ascendente del 000 al 999,
 * donde los numeros no deben tener numeros repetidos
 * e imprimir unicamente vez las combinaciones existentes sin importart el orden
 * @returns {void}  imprime los numeros que cumplan las condiciones
 */

const printCombinations = () => {
  // Variable que guarda todos los valores que cumplan los requisitos
  var numberSeries = [];
  // Variables:
  //primer numero encargado de contener las centenas
  var firstNumber = 0;
  //segundo numero encargado de contener las decenas
  var secondNumber = 0;
  //tercer numero encargado de contener las unidades
  var thirdNumber = 0;

  while (firstNumber <= 9) {
    while (secondNumber <= 9) {
      while (thirdNumber <= 9) {
        if (firstNumber < secondNumber && secondNumber < thirdNumber) {
          numberSeries.push("" + firstNumber + secondNumber + thirdNumber);
        }
        thirdNumber++;
      }
      secondNumber++;
      thirdNumber = 0;
    }
    firstNumber++;
    secondNumber = 0;
  }
  for (let index = 0; index < numberSeries.length; index++) {
    console.log("Combinacion numero " + index + ": " + numberSeries[index]);
  }
};
printCombinations();
