//Speed limit = 70 => "Ok"
//5 => 1 point
//12 points => License suspended

checkSpeed(95);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) console.log("License suspended");
  else console.log("points", points);
}
