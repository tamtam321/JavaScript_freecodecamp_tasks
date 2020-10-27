function truncateString(str, num)
{
    // Solution 1: .slice()

    let new_str = "";

    if(num < str.length)
    {
        if(num >3)
        {
            new_str = str.slice(0, num - 3) + "...";
        }
        else
        {
            new_str = str.slice(0, num) + "...";
        } 
    } 
    else
    {
        return str;
    }

    return new_str;
    
    //_________________________________
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("tommy goes to work.", 3));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));