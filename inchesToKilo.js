function inchesToKilo(inches){
 var ft=12;
 var inchFootCal=inches/ft;
 return inchFootCal;

}

var inches= 144;
var singInch= inchesToKilo(inches);
console.log (singInch);