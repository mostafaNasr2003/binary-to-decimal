//check if result is NAN value if true print empty string
if(result == NaN) {

    document.getElementById("result").innerHTML =""
}
function numToBinary() {

// program to convert decimal to binary

// take input

const number1 = document.getElementById("inputnumber").value
const number = parseInt(number1)
console.log(number)
// convert to binary
const result = number.toString(2);

 
document.getElementById("result").innerHTML = 'binary' + " " + ":" + " " + ' ' + result 





} ;
