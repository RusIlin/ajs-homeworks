import ArrayBufferConverter from './ArrayBufferConverter';
import getBuffer from './getBuffer';

const buffer = getBuffer();
const bufferView = ArrayBufferConverter.load(buffer);
const string = ArrayBufferConverter.toString(bufferView);

console.log(string);
