let anoCompara = 2024;
let idadePessoa;
let dataNascimento =  "1964 03 31";  // formato "yyyy-MM-dd";
let anoNascimento;

let anoSplitter = dataNascimento.split(" ");

anoNascimento = parseInt(anoSplitter[0]);

idadePessoa = anoCompara - anoNascimento;
console.log("A sua idade atual é de: " + idadePessoa + " anos");