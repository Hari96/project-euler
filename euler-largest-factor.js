//working upwards

var num = 600851475143;
for(var i = 2; i <= num; i++) {
    if(num%i == 0) {
        num = num/i;
        if(num == 1) {
            break;
        }
    }
}
console.log(factor);
