// Challenge Description: Számból római számot kell csinálni.


// ROMANIZE SOLUTION 1: solution from the internet

// Megjegyzés: "+" jel string előtt az szám típus lesz. Szóval "+" jellel képesek vagyunk string típust szám típussá alakítani. Split metódussal stringből tömböt csinálunk. Join metódussal pedig tömbből stringet.

/*const convertToRoman = (num) =>
{
    if(isNaN(num))
    {
        return NaN;
    }

    let digits = String(num).split("");
    
    let key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let rom = "";
    let i = 3;

    while(i--)
    {
        rom = (key[+digits.pop() + (i * 10)] || "") + rom
    }

    return Array(+digits.join("") + 1).join("M") + rom;
}*/

//__________________________________________________________________


// ROMANIZE SOLUTION 2: solution from the internet & whatsdev youtubernek is ez a megoldása

function convertToRoman(num)
{
    let keys = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, 
                IX:9, V:5, IV:4, I:1},
        roman = "",
        i;
    
    // while(num > 0)
    // {
    //     for(i in keys)
    //     {
    //         if(num >= keys[i])
    //         {
    //             roman += i;
    //             num -= keys[i];
    //             break;
    //         }
    //     }
    // }

    // OR

    for(i in keys)
    {
        while(num >= keys[i])
        {
            roman += i;
            num -= keys[i];
        }
    }

    return roman;
}

//__________________________________________________________________

// TESTS
console.log("This is tests for romanize:");
console.log(convertToRoman(2036)); // MMXXXVI
console.log(convertToRoman(2)); // II
console.log(convertToRoman(3)); // III
console.log(convertToRoman(4)); // IV
console.log(""); // just for the breakpoint for deromanize's tests



// __________________DEROMANIZE: római számból sima szám__________________
// solutions from the internet

// DEROMANIZE SOLUTION 1:

/*const deromanize = (str) =>
{
    let str_allUppercase = str.toUpperCase(),
        keys = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},

    // Validatorral nézem meg, hogy a bemenet valid-e.
        validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,

    // Tokennel fogom a megfelelő római számot átadni m-nek. Odafigyelve a 2 karakteres római számokra.
        token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,

        num = 0,
        m;

    if(!(str_allUppercase && validator.test(str_allUppercase)))
    {
        return false;
    }

    while(m = token.exec(str_allUppercase))
    {
        num += keys[m[0]];
    }

    return num;
}*/

//____________________________________________________________________


// DEROMANIZE SOLUTION 2:

function deromanize(str)
{
    // Split azért kell, hogy több böngészőnél is működjön a kód.
    // Maga a roman az egy string amiben ugyanúgy lehet indexel lekérni az elemeket, mint egy tömben, de biztonság kedvéért a split metódussal tömbbé alakítottuk. Split nélkül is jól működik a kód csak, hogy biztosra menjünk, hogy mindegyik böngészőn működjön.
    let roman = str.toUpperCase().split("");

    let romanKeys = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
    let num = 0;

    // let i = 0;
    // while(i < roman.length)
    // {
    //     if(romanKeys[roman[i]] < romanKeys[roman[i + 1]])
    //     {
    //         num -= romanKeys[roman[i]];
    //     }
    //     else
    //     {
    //         num += romanKeys[roman[i]];
    //     }

    //     i++;
    // }

    // OR

    let i = roman.length;
    while(i--)
    {
        if(romanKeys[roman[i]] < romanKeys[roman[i + 1]])
        {
            num -= romanKeys[roman[i]];
        }
        else
        {
            num += romanKeys[roman[i]];
        }
    }

    return num;
}

//____________________________________________________________________

// TESTS
console.log("This is tests for deromanize:");
console.log(deromanize("MMCI")); // 2101
console.log(deromanize("XX")); // 20
console.log(deromanize("III")); // 3
console.log(deromanize("DLVI")); // 556
console.log(deromanize("MCMXCIV")); // 1994
console.log(deromanize("MMCDLXXXI")); // 2481