// Challenge Descrioption: Mindig 2 elemű tömb a bemenet és a benne lévő két számot és közte lévő számokat kell szummázni. Van amikor a nagyobb szám van előbb.

// SOLUTION 1: no reduce()

/*const sumAll = (arr) =>
{
    let sum = 0;
    let minVal = Math.min(arr[0], arr[1]);
    let maxVal = Math.max(arr[0], arr[1]);

    while(minVal <= maxVal)
    {
        sum += minVal;
        minVal++;
    }

    return sum;
}*/

//_____________________________________________________


// SOLUTION 2: with reduce()

/*function sumAll(arr)
{
    let result = arr.reduce((total, current) =>
    {
        let min_val = Math.min(total, current);
        let max_val = Math.max(total, current);
        let sum = 0;

        while(min_val <= max_val)
        {
            sum += min_val;
            min_val++;
        }

        return sum;
    })

    return result;
}*/

//_____________________________________________________


// SOLUTION 3: with for loop

function sumAll(arr)
{
    let start = Math.min(arr[0], arr[1]);
    let end = Math.max(arr[0], arr[1]);
    let sum = 0;

    for(let i = start; i <= end; i++)
    {
        sum += i;
    }

    return sum;
}

//_____________________________________________________

// TESTS
console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([11, 11]));