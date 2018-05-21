var number = prompt("enter a number");
function binaryConvert() {
  var num = number;
  
  if (num != Math.floor(num)) {
    document.write(" ");
    
  } else if (num > 255) {
    document.write("Error that number is too high");
        } else if (num < 1) {
    document.write("Error. That number is too low");
  
  } else {
    var binary = parseInt(num, 10);
    document.write(binaryz(binary.toString(2)));
      
    
  }
}
  binaryConvert();

function binaryz(num){
  var str = "00000000";
  var  numlen = num.length;
   
   
 var x =  str.substr(0,8 - numlen) + num;
 return x;
}
