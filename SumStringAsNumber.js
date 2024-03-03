function sumStrings(a, b) {
   const firstNum = Array.from(a);
   const secondNum = Array.from(b);
   
   //check long and small array
   const bigArray = firstNum.length > secondNum.length ? firstNum : secondNum

   const smallArray = bigArray === firstNum ? secondNum : firstNum;

   let startIndex = bigArray.length - smallArray.length;
   let reverseNum = bigArray.length - 1;
   let secondIndex = smallArray.length - 1;
   
   //looping with startIndex where we should start sum
   while(reverseNum >= startIndex) {
       const sum = +bigArray[reverseNum] + +smallArray[secondIndex]
       
       if(sum >= 10) {
           bigArray[reverseNum] = sum -10
           if(reverseNum === 0){
               bigArray.unshift(1)
           } else {
               bigArray[reverseNum - 1] = +bigArray[reverseNum - 1] + 1
           }
       } else {
           bigArray[reverseNum] = sum
       }
       
       reverseNum--
       secondIndex--
   }
   
   //check zero in beggining
   for(let i = 0; i < bigArray.length; i++) {
       if(bigArray[i] === 0) {
           bigArray.splice(i, 1)
       } else {
         break;
       }
   }
   
   return bigArray.join("")
}

console.log(sumStrings('123','456'))//579
console.log(sumStrings('144','236'))//380
console.log(sumStrings('878','122'))//1000
console.log(sumStrings('8797', '45'))//8842
console.log(sumStrings('8797', '415'))//9212
console.log(sumStrings('00103', '08567'))//8670
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))//712577413488402631964821329