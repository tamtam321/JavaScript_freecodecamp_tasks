/*_______________Stack example______________start */
/*
// tömb, stack
var letters = [];

var word = "racecar";
var rword = "";

// put  letters of word  into stack
for(var i = 0; i < word.length; i++)
{
    letters.push(word[i]);
}

// pop off the stack in reverse order
for(var i = 0; i < word.length; i++)
{
    rword += letters.pop();
}

if(rword === word)
{
    console.log(word + " is a palindrome.");
}
else
{
    console.log(word + " is not a palindrome.");
}*/
/*_______________Stack example______________end */

//_____________Create a stack______________start
var Stack = function()
{
    this.count = 0;

    // empty object
    this.storage = {};

    this.push = function(value)
    {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function()
    {
        if(this.count === 0)
        {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function()
    {
        return this.count;
    }

    this.top = function()
    {
        if(this.count === 0)
        {
            return undefined;
        }

        return this.storage[this.count-1];
    }

    this.print = function()
    {
        if(this.count === 0)
        {
            return undefined;
        }
        
        for(var i = 0; i < this.count; i++)
        {
            console.log(this.storage[i]);
        }
    }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.print();
console.log(myStack.top());
console.log(myStack.pop());
console.log(myStack.top());

//_____________Create a stack______________end