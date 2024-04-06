let lista= [15, 8, 90, 75, 102, 6, 2];

let maiorNum = 0;
let menorNum = 100;


for(i = 0; i < lista.length; i++){
    if(lista[i] > maiorNum){
        maiorNum = lista[i];
    } else if(lista[i] < menorNum){
        menorNum = lista[i];
    } else{
        console.log("teste");
    }
}


console.log(menorNum);
console.log(maiorNum);