import read from '../reader';
import json from '../parser';
import data from '../data';

jest.setTimeout(5000);

test('testing response is exactly what it shall be', (done) => {
  read(data)
    .then((response) => json(response))
    .then((response) => {
      expect(response).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
      done();
    });
});
