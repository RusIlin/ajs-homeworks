import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const promise = new Promise((resolve) => {
      read().then((buffer) => {
        json(buffer).then((data) => {
          resolve(data);
        });
      });
    });
    return promise;
  }
}
