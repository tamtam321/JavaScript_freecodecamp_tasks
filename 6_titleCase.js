// A bemenet egy string és abban minden szónak az első betüje nagy.

// first solution
/*function titleCase(str)
{
    let words = str.toLowerCase().split(" ");

    for(let i = 0; i < words.length; i++)
    {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

let sol = titleCase("This is a challenge. What's up?");
console.log(sol);*/

//____________________________________________

// second solution
function titleCase(str)
{
    let words = str.toLowerCase().split(" ").map(function(elem)
    {
        return elem[0].toUpperCase() + elem.slice(1);
    });

    return words.join(" ");
}

let sol = titleCase("I'm a little tea pot");
console.log(sol);