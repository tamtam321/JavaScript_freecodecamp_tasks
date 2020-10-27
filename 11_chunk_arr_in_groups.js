// Solution 1: .slice()
/*function chunkArrInGroups(arr, size)
{
    let new_arr = [];
    let tmp_arr = [];
    let curr_arr_size = arr.length;
    let step = 0;

    if(size > 0 && size <= arr.length)
    {
        while(curr_arr_size >= size)
        {
            tmp_arr = arr.slice(step, size + step);
            new_arr.push(tmp_arr);
            step += size;
            curr_arr_size -= size;
        }

        if(curr_arr_size !== 0)
        {
            tmp_arr = arr.slice(step, arr.length);
            new_arr.push(tmp_arr);
        }
    }
    else
    {
        return "";
    }

    return new_arr;
}*/
//_________________________________________

// Solution 2: .slice()
/*function chunkArrInGroups(arr, size)
{
    let sol_arr = [];

    while(arr.length > 0)
    {
        sol_arr.push(arr.slice(0, size));
        arr = arr.slice(size);
    }

    return sol_arr;
}*/
//_________________________________________

// Solution 3: .splice()
function chunkArrInGroups(arr, size)
{
    let sol_arr = [];

    if(size > 0)
    {
        while(arr.length > 0)
        {
            sol_arr.push(arr.splice(0, size));
            // console.log("arr is currently contain: ", arr);
        }
    }

    return sol_arr;
}
//_________________________________________

console.log(chunkArrInGroups(["a", "b", "c", "d", "e", "f"], 4));