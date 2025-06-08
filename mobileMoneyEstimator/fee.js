
function estimateTransactionFee() {
    // Prompt the user for amount
    const userInput = prompt("Unatuma Ngapi? (KES):");
    
    // Convert input to number
    const amountToSend = Number(userInput);
    
    // Validate input
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Please enter a valid amount greater than 0.");
        return;
    }
    
    // Fee calculation rules
    const feePercentage = 0.015;    // 1.5%
    const minimumFee = 10;          // KES 10 minimum
    const maximumFee = 70;          // KES 70 maximum
    
    // Calculate the basic fee (1.5% of amount)
    let calculatedFee = amountToSend * feePercentage;
    let transactionFee;
    
    // Apply minimum and maximum fee limits
    if (calculatedFee < minimumFee) {
        transactionFee = minimumFee;
    } else if (calculatedFee > maximumFee) {
        transactionFee = maximumFee;
    } else {
        transactionFee = Math.round(calculatedFee);
    }
    
    // Calculate total amount to be debited
    const totalAmount = amountToSend + transactionFee;
    
    // Print results to console
    const output = `Sending KES ${amountToSend}:
Calculated Transaction Fee: KES ${transactionFee}
Total amount to be debited: KES ${totalAmount}

Send Money Securely!`;
    
    console.log(output);
    alert(output); // Also show in popup for visibility
}

// Call the function to run it
estimateTransactionFee();
