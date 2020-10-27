// Adding elements with push.

/*let arr1 = [];
arr1.push(1, 2, 3);
console.log(arr1);
console.log(arr1.length);*/

//_______________________________


// Removing elements from end with resize the array.

/*let arr2 = [1, 2, 3, 4, 5];
arr2.length = 3;
console.log(arr2);*/

//_________________________________________________


// Removing elements from end with pop.

// let arr2 = [1, 2, 3, 4, 5];
// arr2.pop();
// arr2.pop();
// console.log(arr2);

//________________________________________


// Removing elements from beginning with shift

// let arr2 = [1, 2, 3, 4, 5];
// arr2.shift();
// arr2.shift();
// console.log(arr2);

//_____________________________________________


// Using Splice to Remove Array Elements in JavaScript

/*let arr3 = ["film", "etel", "ital", "alma", "hazak"];

// 0-tól indexelünk. ["ital", "alma"] eltávolítása.
arr3.splice(2, 2);
console.log(arr3);*/

//______________________________________________________


// Removing Array Items By Value Using Splice

/*let arr4 = [1,2,3,4,5,6,5,7,5,8,5,9,5,5,10,11];

const removeElem = (_arr, _num) =>
{
    for(let i = 0; i < _arr.length; i++)
    {
        if(_arr[i] === _num)
        {
            _arr.splice(i, 1);
            i--;
        }
    }

    return _arr;
}

console.log(removeElem(arr4, 5));
console.log(arr4.length);*/

//______________________________________________________


// Using the Array filter Method to Remove Items By Value

/*let arr5 = [1,2,3,4,5,6,7,8,9];
let filtered = arr5.filter((num) =>
{
    return num % 2 === 1;
});

console.log(filtered);*/

//_______________________________________________________


// Making a Remove Method

/*let arr6 = [5,1,2,3,4,5,6,5,7,5,8,5,5,9,5];

function arrayRemove(_arr, _num)
{
    return _arr.filter((elem) => 
    {
        return elem !== _num;
    })
}

console.log(arrayRemove(arr6, 5));
console.log(arrayRemove(arr6, 5).length);*/

//___________________________________________________________


// Clear or Reset a JavaScript Array

// test case:
// let arr7 = [1,2,3,4,5,6,7,8,9];
// let arr8 = arr7;

// 1) splice method:
// arr7.splice(0, arr7.length);
// console.log(arr7);
// console.log(arr8);


// 2) zero length method:
// arr7.length = 0;
// console.log(arr7);
// console.log(arr8);


// 3) loop method: little bit odd, but looks fancy
/*while(arr7.length)
{
    arr7.pop();
}

console.log(arr7);
console.log(arr8);*/

//________________________________________________________