import Character from '../character';

export default class Magician extends Character {
    constructor(attack = 10, stoned = false) {
        super(attack, stoned);
    }
}