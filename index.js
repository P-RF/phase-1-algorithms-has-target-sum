function hasTargetSum(array, target) {
  // Write your algorithm here
  const avaiNumbers = new Set(); // Create a new set of values

  for (const num of array) {    // Iterate over elements of the array
    const supplementary = target - num; // Calculate the number needed to reach target

    if (avaiNumbers.has(supplementary)) {
      return true;  // Return true if supplementary number exists in the set
    }

    avaiNumbers.add(num); // Add current number to the set
  }

  return false; // Return false if pairs not found
}
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Output: true

/* 
  Write the Big O time complexity of your function here
  If the length of the array is n, the loop runs n times (unknown how many).
  Inside the loop, two operations are involved; checking for existence and adding to the set.
  avaiNumbers.has(supplementary) has an average time complexity of O(1) because it uses a hash map (stores and retrieves values).
  avaiNumbers.add(num) also has an average time complexity of O(1).
  Overall time complexity is O(n) because constant numbers are removed.
*/

/* 
  FUNCTION hasTargetSum(array, target)
    CREATE an empty set called avaiNumbers

    FOR each number in the array DO
      CREATE complement = target - number

      IF complement is in avaiNumbers THEN
        RETURN true
      
      ADD number to avaiNumbers
      END FOR LOOP

      Return false
      END FUNCTION
*/

/*
  Write a function called hasTargetSum with an array and target in its parameter.
  The funtion returns true of two values add up to the target number. Include target number in the array.
  Create a new set of values to store unique values only; no duplicates.
  Create a for... of loop to iterate over the elements of the object.
  Find two numbers in the array that add up to the target number.
  Function has a return value that should return true.
  Add current numbers to the set; check if supplementary number exists in avaiNumbers set.
  If pair of numbers do not add up to target number after loop, return false.
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
}

module.exports = hasTargetSum;
