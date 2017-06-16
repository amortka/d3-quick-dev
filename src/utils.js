const PI = 3.14159;

function rad2deg(rad) {
  return rad * (180 / PI);
}

function deg2rad(deg) {
  return deg * (PI / 180);
}

export {
  rad2deg,
  deg2rad
}