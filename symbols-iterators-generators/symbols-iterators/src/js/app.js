import Team from './Team';
import Character from './Character';

const Viktor = new Character('Victor', 'Daemon', 40, 10);
const Senik = new Character('Senik', 'Undead', 25, 25);
const Sancho = new Character('Sancho', 'Magician', 40, 10);
const Groo = new Character('Groo', 'Swordsman', 10, 40);
const Maverick = new Character('Maverick', 'Bowerman', 25, 25);

const icpPeople = new Team('icpPeople');

const lobby = [
  Viktor,
  Senik,
  Sancho,
  Groo,
  Maverick,
];

icpPeople.addAll(...lobby);

for (const person of icpPeople.members) {
  console.log(person);
}
