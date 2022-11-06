//check if result is NAN value if true print empty string
if(result == NaN) {

    document.getElementById("result").innerHTML =" "
}
// program to convert decimal to binary

function binaryToNumber() {
    const binary = document.getElementById('inputnumber').value    //take input
    const result = parseInt(binary, 2)
document.getElementById("result").innerHTML = ' number' + " " + ":" + " " + ' ' + result 

}