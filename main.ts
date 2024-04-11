//   Checks the current hour and logs "Good Morning" if it's before 12 PM

let currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
console.log(currentTime);
// This simple check helps us greet users appropriately based on the time of day.
