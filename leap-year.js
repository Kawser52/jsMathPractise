function leapYer(year){

 if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
  console.log('Leapyar')
 }else{
     console.log('Not Leapyear');
 }

}

var leap = leapYer(1200);
// console.log('Leap Year',leap);