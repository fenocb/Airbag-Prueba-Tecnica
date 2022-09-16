/**
 * Calcula el valor de una mano de blackjack.
 * @param {string[]} cards valor de las cartas (1,2,3,4,5,6,7,8,9,J,Q,K,A)
 * @returns El valor total del arreglo insertado
 */
const blackjack = (cards) => {
   // Variable: Suma total de los valores 
  var totalValue = 0;
  // Variable: Contador de As
  var asCount = 0;
  for (let index = 0; index < cards.length; index++) {
    //Asigna valor a las cartas altas K,Q,J
    if (cards[index] == "K" || cards[index] == "Q" || cards[index] == "J") {
      totalValue += 10;
      //Cuenta las cartas A's para luego calcular
    } else if (cards[index] == "A") {
      asCount++;
      //Transforma los valores a numeros y los suma
    } else {
      var cardValue = parseInt(cards[index]);
      totalValue += cardValue;
    }
  }
  
  for (let index = 0; index < asCount; index++) {
    //Asigna valor dependiente a si sera 1 u 11
    if (totalValue + 11 >= 21) {
      totalValue += 1;
    } else {
      totalValue += 11;
    }
  }
  return totalValue;
};
console.log(blackjack(["A", "3", "3", "9", "6"]));
