let multaDiaria = 0.50;
let diasAtraso = 7.0;
//let diasAtraso = parseInt(atraso); 
let totalMulta = 0.0;

//var atraso = prompt("Coloque quantos dias de atraso do usuário: ");

for(i = 0; i < diasAtraso; i++){
    totalMulta = (multaDiaria * diasAtraso);
    //return totalMulta;
}

console.log("Sua multa após " + diasAtraso + " dias de atraso foi de: R$ " + totalMulta);