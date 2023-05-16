
function number_cardinality(entero) {
  if(entero%10==0&&!entero%5==0){
    return "zero"
  }
   else if(!entero%10==0&&entero%5==0){
    return "five"
  }
   else if(entero%2==0&&!(entero%10==0&&!entero%5==0)){
    return "even"
  }

 else  if(entero%2==1&&!(!entero%10==0&&entero%5==0)){
    return "odd"
  }
  
}

console.log(number_cardinality( 100))
console.log(number_cardinality(88))
console.log(number_cardinality(155))
console.log(number_cardinality(99))