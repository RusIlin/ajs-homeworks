import read from './reader';
import json from './parser';
import data from './data';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => resolve(read(data)))
      .then((response) => {
        const obj = json(response);
        return obj;
      })
      .then((response) => JSON.parse(response));
  }
}
