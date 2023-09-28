export default class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Этот персонаж уже в команде!');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    [...characters].forEach((item) => {
      this.members.add(item);
    });
  }

  toArray() {
    return [...this.members];
  }

  *[Symbol.iterator]() {
    for (const value of this.members) {
      yield value;
    }
  }
}
