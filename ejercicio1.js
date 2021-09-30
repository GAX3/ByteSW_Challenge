//1.	Un programa que imprima los primeros 10 números primos (número primo es el que es divisible únicamente sobre sí mismo y 1).

function primo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}


//del 2 al 30 se encuentran los primeros primos por eso asignamos la variable x=30
var x= 30;

for (var j = 2; j < x; j++) {
  if (primo(j)) {
    console.log(j + " es primo.");
  }
  
}

