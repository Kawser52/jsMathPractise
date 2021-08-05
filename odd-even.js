function evenNumber(cheakNumber){
  if(cheakNumber % 2 == 0 ){
      return true;
  }
  return false;
}

var pathanoNumber= evenNumber(144);
// console.log(pathanoNumber);

// another logic is cheakNumbers % 2 ==1 
function oddNumber (cheakNumbers){
    if (cheakNumbers % 2 !=0 ){
      return true;
    }
    return false;


}

var pathanoNumber= oddNumber(143);
console.log(pathanoNumber);