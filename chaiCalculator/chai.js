function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoons
  const sugarPerCup = 2; // teaspoons

  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora!`);
}

// Prompt the user for input
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(input);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Please enter a valid number of cups.");
}
