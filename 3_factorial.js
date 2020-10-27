function Factorial(str)
{
    var num = parseInt(str);
    var fac = 1;

    for(var i = 2; i <= num; i++)
    {
        fac *= i;
    }

    return fac;
}

var res = Factorial("6");
console.log(res);