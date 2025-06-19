// 1. Find exact matches (case-insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. Find drivers where the name starts with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// 3. Match objects by 'name' property
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
// Code your solution here
