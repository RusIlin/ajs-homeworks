export default function canIterate(data) {
  if (data) {
    if (Symbol.iterator in Object.getPrototypeOf(data)) {
      return true;
    }
    return false;
  }
  return false;
}
