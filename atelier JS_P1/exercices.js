// EXERCICE 2

function Nombres_parfait(n) {
    for (let i = 1; i < n; i++) {
      let sum = 0;
      
      for (let j = 1; j < i; j++) {
        if (i % j === 0) {
          sum += j;
        }
      }
      
      if (sum === i) {
        console.log(i);
      }
    }
  }

  var Nbr = 10;
  Nombres_parfait(Nbr);

// EXERCICE 3

function generateCombinations(chaine1, chaine2) {
  const liste = [];
  
  for (let i = 0; i < chaine1.length; i++) {
    for (let j = 0; j < chaine2.length; j++) {
      liste.push(chaine1[i] + chaine2[j]);
    }
  }
  
  return liste;
}

const result = generateCombinations("abc", "de");
console.log(result);

// EXERCICE 4

function manipulateArray(T) {

  T.sort();
  console.log(T);

  T.push(12);
  console.log(T);

  T.reverse();
  console.log(T);

  const indice = T.indexOf(17);
  console.log(indice);

  T.splice(T.indexOf(38), 1);
  console.log(T);

  const sousTableau1 = T.slice(1, 3);
  console.log(sousTableau1);

  const sousTableau2 = T.slice(0, 2);
  console.log(sousTableau2);

  const sousTableau3 = T.slice(2);
  console.log(sousTableau3);
}

const T = [17, 38, 10, 25, 72];
manipulateArray(T);