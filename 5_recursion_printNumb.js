var arr = [];

function RecursionPrintNumb(startNum, endNum) 
{
    if (startNum === endNum) 
    {
        arr.push(startNum);
        return arr;
    } 
    else if (startNum < endNum) 
    {
        arr.push(startNum);
        startNum++;
        RecursionPrintNumb(startNum, endNum);
    }

    return arr;
}

var res = RecursionPrintNumb(1, 5);
console.log(res);
