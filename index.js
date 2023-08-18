let numbers = [76,23,78,87,99,121,9,8]

let maxNumber = numbers[0];
let miniNumber = numbers[0];

for(let i=1; i<numbers.length; i++){
    if(numbers[i]>maxNumber){
        maxNumber = numbers[i] ;
}
    if(numbers[i]<miniNumber){
       miniNumber = numbers[i] ;
    }
}
console.log('Maximum Number is :' + maxNumber);
console.log('Minimum Number is:' + miniNumber);
