//Condicionais If e Else
// As condicionais if e else são usadas para executar diferentes blocos de código com base em condições booleanas. A estrutura básica é:

let idade = 12;

if(idade >= 18){
    console.log("Você é maior de idade.");
}else if(idade >= 14 && idade < 18){
    console.log("Você é um adolescente.");
}else if(idade >= 12 && idade < 14){
    console.log("Você é um jovem.");    
}
else{
    console.log("Você é uma criança.");
}