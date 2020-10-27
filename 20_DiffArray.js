// Challange Description: 2 tömb bemenet. Vissza kell adni azokat az értékeket vagy értéket ami csak az egyik tömben szerpel.

// SOLUTION 1: with filter()

/*const diffArray = (arr1, arr2) =>
{
    let newArr1 = arr1.filter((elem) =>
    {
        if(arr2.indexOf(elem) === -1)
        {
            return elem;
        }
    });

    let newArr2 = arr2.filter((elem) =>
    {
        if(arr1.indexOf(elem) === -1)
        {
            return elem;
        }
    });

    let result = newArr1.concat(newArr2);

    return result;
}*/

//______________________________________________________


// SOLUTION 2: with for loop

/*function diffArray(arr1, arr2)
{
    let newArr = [];

    for(let i = 0; i < arr1.length; i++)
    {
        if(arr2.indexOf(arr1[i]) === -1)
        {
            newArr.push(arr1[i]);
        }
    }

    for(let j = 0; j < arr2.length; j++)
    {
        if(arr1.indexOf(arr2[j]) === -1)
        {
            newArr.push(arr2[j]);
        }
    }

    return newArr;
}*/

//_______________________________________________________


// SOLUTION 3:

function diffArray(arr1, arr2)
{
    let newArr = arr1.concat(arr2);

    return newArr.filter((num) =>
    {
        if(arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1)
        {
            return num;
        }
    });
}

//_______________________________________________________

// TESTS
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // 4
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // "pink wool"
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // "pink wool", "diorite"
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // []
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])); // "piglet", 4
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // "snuffleupagus", "cookie monster", "elmo"
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // 1, "calf", 3, "piglet", 7, "filly"