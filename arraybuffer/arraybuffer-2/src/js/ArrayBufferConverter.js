export default class ArrayBufferConverter {
  static load(buffer) {
    const bufferView = new Uint16Array(buffer);
    return bufferView;
  }

  static toString(bufferView) {
    return String.fromCharCode(...bufferView);
  }
}
