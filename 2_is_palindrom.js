function IsPalindrom(str)
{
    var regx = /[\W_]/g;
    var strWithoutRegx = str.replace(regx, "");
    var strRev = strWithoutRegx.split("").reverse().join("");
    var strRevSmall = strRev.toLowerCase();

    var strOriComp = strWithoutRegx.toLowerCase();

    //console.log(strOriComp);
    //console.log(strRevSmall);

    if(strOriComp === strRevSmall)
        return true;
    
    return false
}

var res = IsPalindrom("sra c_E*%/car S");
console.log(res);