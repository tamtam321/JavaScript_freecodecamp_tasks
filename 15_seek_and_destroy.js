// Challenge Description: Megvan adva egy kezdő tömb első paraméternek, utána 1 vagy több maraméter követi és azok mondják meg, hogy milyen elemet töröljünk a tömből.

// Tip 1: Arguments object, Array.prototype.filter().
// Tip 2: Arguments object nem működik arrow function esetén. Még nem tudom miért.

// SOLUTION 1: arguments object & .filter()

/*function destroyer(arr)
{
    return arr.filter((elem) => 
    {
        for(let i = 1; i < arguments.length; i++)
        {
            if(elem == arguments[i])
            {
                return false;
            }
        }

        return true;
    });    
}*/


// SOLUTION 2: argumetns object & .splice()

/*function destroyer(arr)
{
    let arg = Array.from(arguments);
    arg.splice(0, 1);
    let target = arg;
    let sol_arr = [];

    for(let elem of arr)
    {
        if(target.indexOf(elem) === -1)
        {
            sol_arr.push(elem);
        }
    }
    
    return sol_arr;
}*/


// SOLUTION 3: arguments object & .filter() & .includes()

function destroyer(arr)
{
    let args = Array.from(arguments);
    args.splice(0, 1);
    let targets = args;

    return arr.filter((elem) =>
    {
        return !targets.includes(elem);
    })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

//_______________________________________________________________

// w3schools.com example for arguments object
/*x = findMax(1, 123, 500, 115, 44, 88);

function findMax() 
{
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) 
  {
    if (arguments[i] > max) 
    {
      max = arguments[i];
    }
  }
  return max;
}

console.log(x);*/
//__________________________________________________________