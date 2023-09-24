import Bowman from './heroes/bowman';
import Daemon from './heroes/daemon';
import Magician from './heroes/magician';
import Swordsman from './heroes/swordsman';
import Undead from './heroes/undead';
import Zombie from './heroes/zombie';

const bowman = new Bowman('Test');
const daemon = new Daemon('Test');
const magician = new Magician('Test');
const swordsman = new Swordsman('Test');
const undead = new Undead('Test');
const zombie = new Zombie('Test');

console.log(bowman);
console.log(daemon);
console.log(magician);
console.log(swordsman);
console.log(undead);
console.log(zombie);