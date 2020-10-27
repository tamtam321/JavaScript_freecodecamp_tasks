// Challenge Description: Meg kell adni, hogy ha beszúrjuk a num paramétert a tömbe, akkor milyen indexel rendelkezik és azt kell visszaadni. Mindenek előtt sorba kell rendezni. Ha töbszőr szerepel a szám, akkor a legkisebb indexet kell visszaadni.

//SOLUTION 1: push(), sort(), indexOf()

/*function getIndexToIns(arr, num)
{
    arr.push(num);
    arr.sort((a, b) =>
    {
        return a - b;
    });

    let sol_idx;

    sol_idx = arr.indexOf(num);

    console.log(arr);
    return sol_idx;
}*/

//__________________________________________________________


// SOLUTION 2: 

const getIndexToIns = (arr, num) =>
{
    arr.sort(function(a, b){return a - b;});

    for(let i = 0; i < arr.length; i++)
    {
        if(num <= arr[i])
        {
            return i;
        }
    }

    return arr.length;
}

//__________________________________________________________

// Tests:
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));