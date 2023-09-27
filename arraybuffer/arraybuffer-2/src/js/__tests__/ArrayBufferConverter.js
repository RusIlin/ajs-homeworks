import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('testing whether method load() could create bufferview', () => {
  const buffer = getBuffer();
  const bufferView = ArrayBufferConverter.load(buffer);
  expect(bufferView).toBeInstanceOf(Uint16Array);
});

test('testing whether method toString() could return necessary string', () => {
  const buffer = getBuffer();
  const bufferView = ArrayBufferConverter.load(buffer);
  const string = ArrayBufferConverter.toString(bufferView);
  expect(string).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
