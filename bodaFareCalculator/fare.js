function calculateBodaFare(distanceInKm) {
  const baseFare = 50; // KES
  const chargePerKm = 15; // KES per km

  const travelFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + travelFare;

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${travelFare}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}

// Prompt the user for input
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = parseFloat(input);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Tafadhali andika kilomita halali.");
}
