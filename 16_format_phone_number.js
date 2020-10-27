// Bemenet egy 10 számjegyű szám és át kell alakítani telefonszám formátumba, ahogy USA-ban is van.

/*const formatPhoneNumber = (num) =>
{
    let cleaned = ("" + num).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if(match)
    {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    return null;
}

console.log(formatPhoneNumber(" 12-3 45 6-78 90 "));*/

//_______________________________________________________________________________


// Bemenet egy 10 számjegyű szám és át kell alakítani telefonszám formátumba, ahogy USA-ban is van. Itt engedélyezve van opcionálisan, hogy szerepeljen e a +1 nemzetközi kód.

const formatPhoneNumberWithCode = (num) =>
{
    let cleaned = ("" + num).replace(/\D/g, "");
    let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if(match)
    {
        let intlCode = (match[1] ? "+1" : "");
        return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }

    return null;
}

console.log(formatPhoneNumberWithCode("+1+555-555-5555"));

//__________________________________________________________________________________