// Feladat: Első paraméter egy tömb, a második paraméterrel mondom meg hogy a tömb elejéből mennyit kéne levágni. Maradékot visszaadni.

const slasher = (arr, howMany) => {
  // Method 1: .splice()

    arr.splice(0, howMany);

    return arr;

  //_____________________________________

  // Method 2: .slice()

  /*let sol_arr = [];

  sol_arr = arr.slice(howMany);

  return sol_arr;*/

  //_____________________________________
};

console.log(slasher(["fries", "pizza", "hamburger, sandwitch"], 2));
