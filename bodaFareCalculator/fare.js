function calculateBodaFare() {
    // Prompt the user for distance
    const userInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
    
    // Convert input to number
    const distanceInKm = Number(userInput);
    
    // Validate input
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Please enter a valid distance in kilometers.");
        return;
    }
    
    // Fare calculation rules
    const baseFare = 50;           // KES 50 base fare
    const chargePerKm = 15;        // KES 15 per kilometer
    
    // Calculate total fare
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;
    
    // Print results to console
    const output = `Uko kwote? Io ni ${distanceInKm} km:
Ukikalia Pikipiki: KES ${baseFare}
Mpaka Uko: KES ${distanceCharge}
Total: KES ${totalFare}

Panda Pikipiki!`;
    
    console.log(output);
    alert(output); // This will show the output in a popup
}

// Call the function to run it
calculateBodaFare();

