for (var i = 1; i <= 10; i++)
console.log(i);

for (var i = 0; i<= 20;i+=2)
if(i % 2 == 0){
  console.log("Even Number" + i);
}

for (var i = 1; i<= 15;i++)
if(i % 2 != 0){
  console.log("Odd Number" + i);
}


for (var i = 1; i <= 10; i++) {
  console.log(7 * i);
}

var a = 0, b = 1, next;

console.log(a);
console.log(b);

for (var i = 2; i < 10; i++) {
  next = a + b;
  console.log(next);
  a = b;
  b = next;
}
let str = "hello";
let reversedStr = "";

for(var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log(reversedStr);

var arr = [3, 7, 2, 9, 5];
var smallest = arr[0]

for(var i = 1; i < arr.length; i++) {
    if(arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(smallest)