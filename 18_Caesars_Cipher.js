// Challenge Description: Dekódolni kell az adott bemenetet rot13 szabály szerint. A szóköz, vessző és egyéb nem betű karaktereket csak adjuk tovább, nem kell velük semmit sem csinálni.
// Rot13: olyan titkosítás, ahol az adott betű ascii kódját 13 értékkel előre vagy hátra van tolva.


// SOLUTION 1:

/*const rot13 = (str) =>
{
    let arr_encoded = str.split(" ");
    let int_decoded;
    let str_decoded = "";
    let arr_decoded = [];
    let tmp;

    for(let i = 0; i < arr_encoded.length; i++)
    {
        str_decoded = "";

        for(let j = 0; j < arr_encoded[i].length; j++)
        {
            int_decoded = arr_encoded[i].charCodeAt(j);

            if(int_decoded >= 65 && int_decoded <= 77)
            {
                int_decoded += 13;
            }
            else if(int_decoded >= 78 && int_decoded <= 90)
            {
                int_decoded = 64 + (13 - (90 - int_decoded));
            }
            else
            {
                return "invalid input";
            }
            
            str_decoded += String.fromCharCode(int_decoded);
        }

        arr_decoded.push(str_decoded);
    }

    let result = arr_decoded.join(" ");

    return result;
}*/

//__________________________________________________________________


// SOLUTION 2:

function rot13(str)
{
    let result = "";

    for(let i = 0; i < str.length; i++)
    {
        let asciiNum = str[i].charCodeAt();
        
        if(asciiNum >= 65 && asciiNum <= 77)
        {
            result += String.fromCharCode(asciiNum + 13);
        }
        else if(asciiNum >= 78 && asciiNum <= 90)
        {
            result += String.fromCharCode(asciiNum - 13);
        }
        else
        {
            result += str[i];
        }
    }

    return result;
}

//__________________________________________________________________


// TESTS:
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("LBH NER GUR ORFG"));
console.log(rot13("LBH JVYY OR N CEBTENZZRE"));