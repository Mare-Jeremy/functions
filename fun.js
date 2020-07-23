const factorial = function(n) 
{        if(n == 0) {return 1} 
         else {return n * factorial(n - 1);}        }
 
console.log(factorial(6));
          
const getAverage = arr => {
    const reducer = (total, currentValue) => total + currentValue
    const sum = arr.reduce(reducer);
    return sum / arr.length;
}
console.log(getAverage ([1, 2, 3, 4, 5,]));



const Star = (n)=>{
if(n === 0) return 0;
Star(n - 1);
return console.log('*'.repeat(n));
}
Star(6)


   let y = 7;
   let x = 7;

   let str = "";

   for(let i = 1; i < y; i++ ){
   for(let j = 1; j < x; j++){
   if(i + j >= y){
   str = str.concat("*");
   }else{
   str = str.concat(" ")
        }
    }
 str = str.concat("\n")
    }

            console.log(str)


