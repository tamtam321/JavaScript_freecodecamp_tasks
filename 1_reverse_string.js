function reverseString(str)
{
    // method 1
    //return str.split("").reverse().join("");

    // method 2
    /*var stringArray = str.split("");
    var stringReverseArray = stringArray.reverse();
    var stringReverse = stringReverseArray.join("");
    return stringReverse;*/

    // method 3
    var strReverse = "";
    for(var i = str.length-1; i >= 0; i--)
    {
        strReverse += str[i];
    }
    return strReverse;
}

var res = reverseString("Salat");
console.log(res);