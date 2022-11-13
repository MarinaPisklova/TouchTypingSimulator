export function getShiftForKey(letter) {
  let keysForRightShift = ["a", "s", "d", "f", "g", "q", "w", "e", "r", "t", "z", "x", "c", "v", "b"];
  return keysForRightShift.includes(letter) ? "ShiftRight" : "ShiftLeft";
}