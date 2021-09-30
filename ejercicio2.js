/*
2.	Un programa que indique si la cadena ingresada es un palíndromo. 
(Un palíndromo es una palabra, número o frase que se lee igual hacia adelante que hacia atrás.
     Ejemplo: RECONOCER). El programa debe recibir la palabra de parámetro.
    */


     function palindromo(word){

        let invertido = word
                        .split('')
                        .reverse()
                        .join('');
    
        console.log(word);
        console.log(invertido);
    
        return invertido === word; 
        
    }
    
    console.log("Es un palindormo? " + palindromo("RECONOCER"));