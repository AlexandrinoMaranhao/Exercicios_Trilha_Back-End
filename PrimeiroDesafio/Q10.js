let str = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let sl = str.length;
let contador = 0;

for(let i = 0; i < sl; i++){
    if (str.charAt(i) === str.charAt(i).toUpperCase()) {
        console.log('uppercase:',str.charAt(i));
    } else {
        console.log("not uppercase")
    }
    contador++;    
}

console.log(contador);