var sum = 2;
var fibArray = [ ];
fibArray[0] = 1;
fibArray[1] = 2;
for (i =2; i < 40000; i++) {
if (fibArray[i - 1] >=4000000) {
break;
}
fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
if ((fibArray[i])%2 === 0) {
sum += fibArray[i];
}
}
console.log(i);
console.log(fibArray[i - 1]);
console.log(sum);