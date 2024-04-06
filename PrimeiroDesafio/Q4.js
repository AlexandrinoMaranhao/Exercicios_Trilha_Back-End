let numeros = [23, 16, 11, 8, 19, 14, 5, 21]

function isPrimo(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}


function separeNumerosPrimos(numeros){  
    let numerosPrimos = []; 
    for(let i = 0; i < numeros.length; i++){
        if(isPrimo(numeros[i]) == true){
            console.log(numeros[i]);
            numerosPrimos.push(numeros[i])
        }
    }
    return numerosPrimos;
}


console.log(separeNumerosPrimos(numeros));

