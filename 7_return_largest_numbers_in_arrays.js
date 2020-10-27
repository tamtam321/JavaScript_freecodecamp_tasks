function largestOfFour(arr)
{
    let largest_numbs_inArrs = [];

    for(let i = 0; i < arr.length; i++)
    {
        let largest = arr[i][0];

        for(let j = 0; j < arr[i].length; j++)
        {
            if(largest < arr[i][j])
            {
                largest = arr[i][j];
            }
        }

        largest_numbs_inArrs.push(largest);
    }

    return largest_numbs_inArrs;
}

// largestOfFour([[4, 5, 1, 3], [13, 26, 28, 56], [32, 35, 37, 39], [1000, 1001, 875, 1]]);

// largestOfFour([[-4, -5, -1, -3], [-13, 26, 28, -56], [32, 35, 37, 39], [1000, 1001, 875, 1]]);

console.log(largestOfFour([[-4, -5, -1, -3], [-13, 26, 28, -56], [32, 35, 37, 39], [1000, 1001, 875, 1]]));