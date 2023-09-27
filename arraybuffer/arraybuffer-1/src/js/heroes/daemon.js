import Character from '../character';

export default class Daemon extends Character {
    constructor(attack = 10, stoned = false) {
        super(attack, stoned);
    }
}