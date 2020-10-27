// True, ha a tömb második eleme benne van az elsőben. Kis és nagybetű nem számít !

const mutation = (arr) =>
{
    // Method 1: Itt akkor true, ha maga a szó megtalálható benne.

    /*let arr_first = arr[0].toLowerCase();
    let arr_second = arr[1].toLowerCase();
    let res = arr_first.indexOf(arr_second);

    return res > -1;*/

    //_____________________________________________________________________

    // Method 2: Itt akkor true, ha a szó betűi található meg benne, nem kell, hogy maga a szó is benne legyen.

    /*let arr_first = arr[0].toLowerCase();
    let arr_second = arr[1].toLowerCase();
    
    for(let i = 0; i < arr_second.length; i++)
    {
        if(arr_first.indexOf(arr_second[i]) === -1) return false;
    }

    return true;*/

    //_____________________________________________________________________

    // Method 3: Ugyanaz, mint a második csak másképp

    /*let arr_first = arr[0].toLowerCase();
    let arr_second = arr[1].toLowerCase();
    
    for(let letter of arr_second)
    {
        if(arr_first.indexOf(letter) === -1) return false;
    }

    return true;*/

    //_____________________________________________________________________

    // Method 4: Ugyanaz, mint a második csak másképp

    let arr_first = arr[0].toLowerCase();
    let arr_second = arr[1].toLowerCase();
    
    for(let letter of arr_second)
    {
        if(!arr_first.includes(letter)) return false;
    }

    return true;

    //_____________________________________________________________________
}

console.log(mutation(["osllhsseddd", "HeLLod"]));