function calculateChaiIngredients() {
    // Prompt the user for number of cups
    const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    
    // Convert input to number
    const numberOfCups = Number(userInput);
    
    // Validate input
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid positive number of cups.");
        return;
    }
    
    // Standard recipe per cup
    const waterPerCup = 200;      // ml
    const milkPerCup = 50;        // ml
    const teaLeavesPerCup = 1;    // tablespoon
    const sugarPerCup = 2;        // teaspoons
    
    // Calculate total ingredients
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
    
    // Print results to console
    console.log(`To make ${numberOfCups} cup${numberOfCups > 1 ? 's' : ''} of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''}`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}`);
    console.log("");
    console.log("Enjoy your Chai Bora!");
}

// Call the function to run it
calculateChaiIngredients();