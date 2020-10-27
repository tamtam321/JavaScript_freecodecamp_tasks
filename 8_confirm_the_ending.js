/*
Megvizsgáljuk, hogy a megadott targettel végződik-e a stringünk.
*/

function confirmEnding(str, target) {
  // Solution 1: .endsWith()

  // return str.endsWith(target);

  //__________________________________

  // Solution 2: .substr()

  /*let is_contain = false;
    
    if(str.substr(str.length - target.length, target.length) == target)
    {
        is_contain = true;
    }

    return is_contain;*/

  //____________________________________

  // Solution 3: .substr()

//   return str.substr(-target.length) === target;

  //______________________________________

  // Solution 4: .substring()

  /*let is_contain = false;
    
    if(str.substring(str.length - target.length, str.length) == target)
    {
        is_contain = true;
    }

    return is_contain;*/

  //____________________________________

  // Solution 5: .slice()
  
    return str.slice(-target.length) === target;

  //______________________________________
}

console.log(confirmEnding("Bastian", "an"));
