var mes = 10 
var mes1 = prompt("Ingrese numer de mes (1 - 12):");

console.log (mes);

//noprotect

while (mes1 > 12){
  mes1 = prompt ('Ingrese nuero de mes (1 - 12):'); 
}


if (mes1 == 12 || mes1 <= 2 ){
  alert ("Es Invierno");
  console.log ("Es Invierno");
}else if (mes1 == 3 || mes1 <= 5){
  alert ("Es Primavera");
  console.log("Es Primavera");
}else if (mes1 == 6 || mes1 <= 8){
  alert ("Es Verano");
  console.log ("Es Verano");
}else {
  alert ("Es Otoño");
  console.log ("Es Otoño");
}

console.log ("Javier Marroquín");
console.log ("22006116");
