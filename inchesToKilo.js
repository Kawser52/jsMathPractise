function inchesToKilo(inches){
 var ft=12;
 var inchFootCal=inches/ft;
 return inchFootCal;

}

var inches= 144;
var singInch= inchesToKilo(inches);
console.log (singInch);

function mileToKilometer(miles){
    var km=miles * 1.60934;
    return km; 
}
var unitMile= mileToKilometer(26.54);
console.log('Ha ha eto Km', unitMile);