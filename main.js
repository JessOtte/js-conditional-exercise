let actualTemp = prompt('What is the temp');
let desiredTemp = prompt('What is your desired temp?');



if (actualTemp === desiredTemp) {
    console.log(`Standby!`);
}
else if (actualTemp > desiredTemp) {
    console.log(`Turn on the A/C!`);
}
else if (actualTemp < desiredTemp) {
    console.log(`Run Heat!`);
}
else {
    console.log(`Alert - Call Manufacturer!`);
}
