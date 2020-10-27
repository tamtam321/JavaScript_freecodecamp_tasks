// Remove all the falsy values from an array.
// Falsy values in JS are [false | null | 0 | "" | undefined | NaN].

const bouncer = (arr) =>
{
    // Solution 1: .filter()
    /*let falsyValues = [false, null, 0, "", undefined, NaN];
    const check_falsy_values = (param) =>
    {
        let flag = true;

        for(let j = 0; j < falsyValues.length; j++)
        {
            flag = true;
            if(param == falsyValues[j])
            {
                flag = false;
                break;
            }
        }

        return flag;
    }

    return arr.filter(check_falsy_values);*/
    //_______________________________________________

    // Solution 2: .filter()
    /*const check_Falsy_Values = (param) =>
    {
        let falsyValues = [false, null, 0, "", undefined, NaN];
        let flag = true;

        for(let elem_falsy of falsyValues)
        {
            flag = true;

            if(param == elem_falsy)
            {
                flag = false;
                break;
            }
        }

        return flag;
    }

    return arr.filter(check_Falsy_Values);*/
    //________________________________________________

    // Solution 3: for loop
    /*let arr_true = [];

    for(let elem of arr)
    {
        if(elem)
        {
            arr_true.push(elem);
        }
    }

    return arr_true;*/
    //_________________________________________________

    // Solution 4: .filter()
    return arr.filter((elem) =>
    {
        return elem;
    });
    //_________________________________________________
}

console.log(bouncer([7, "ate", "", false, 9, "hey", undefined]));