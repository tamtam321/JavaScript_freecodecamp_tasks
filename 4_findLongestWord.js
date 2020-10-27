function FindLongestWord(str)
{
    var longest = "";
    var words = str.split(" ");

    for(var i = 0; i < words.length; i++)
    {
        if(longest.length < words[i].length)
        {
            longest = words[i];
        }
    }

    return longest.length;

    // another solution
    //return str.split(" ").sort(function(a, b) {return b.length - a.length})[0].length;
}

var res = FindLongestWord("This coding challanges are for beginner");
console.log(res);

// another method to iterate through array
/*var fruits = ["apple", "orange", "banana"];
for(var fruit of fruits)
{
    console.log(fruit);
}*/