import read from '../reader';
import data from '../data';
import mockdata from '../mockdata';

jest.setTimeout(7000);


test('testing instance of response', async () => {
  expect.assertions(1);
  const array = await read(data);
  expect(array).toBeInstanceOf(ArrayBuffer);
});

test('testing instance of response', async () => {
  expect.assertions(1);
  try {
    await read(mockdata);
  } catch (err) {
    expect().toThrow('rejected');
  }
});
