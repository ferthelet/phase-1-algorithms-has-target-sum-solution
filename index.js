function hasTargetSum(array, target) {
  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // Loop through the array again
    for (let j = i + 1; j < array.length; j++) {
      // Check if the sum of two elements is equal to the target
      if (array[i] + array[j] === target) {
        return true; // Found a match, return true
      }
    }
  }
  return false; // No match found, return false
}

/* 
  Write the Big O time complexity of your function here

  O(n^2) time complexity
  O(1) space complexity

*/

/* 
  Add your pseudocode here

  1. Loop through the array
  2. For each element, loop through the array again
  3. If the sum of the two elements is equal to the target, return true
  4. If we get through the whole array without finding a match, return false

*/

/*
  Add written explanation of your solution here

  This solution is pretty straightforward. We loop through the array and for each element, we loop through the array again. If the sum of the two elements is equal to the target, we return true. If we get through the whole array without finding a match, we return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
