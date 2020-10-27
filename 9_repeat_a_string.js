function repeatStringNumTimes(str, num)
{
    // Solution 1:

    /*let new_str = "";

    if(num > 0)
    {
        for(let i = 0; i < num; i++)
        {
            new_str += str + " ";
        }
    }
    else
    {
        return "";
    }

    return new_str;*/

    //_____________________________________

    // Solution 2: .repeat()

    /*if(num < 0) return "";
    return str.repeat(num);*/

    //______________________________

    // Solution 3: recursion

    if(num < 0) return "";
    if(num === 1) return str;
    return str + repeatStringNumTimes(str, num-1);

    //______________________________
}

console.log(repeatStringNumTimes("No", 0));