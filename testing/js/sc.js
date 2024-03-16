
function createMultiplier(multiplier,number) {
    console.log(multiplier);
    console.log(number);
    return function (number) {
        console.log(multiplier);
        console.log(number);
      return number * multiplier;
    };
  }
  
  const double = createMultiplier(3,6);
//   const triple = createMultiplier(3);
  console.log(double);
  let ans=double(2);
  console.log(ans);
//   console.log(double(5)); 
//   console.log(triple(5)); 