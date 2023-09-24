export default class Character {
    constructor(name, type, attack, defence, health = 100, level = 1) {
        if (name.length >= 2 && name.length <= 10) this.name = name;
        else throw new Error('The class name must be between 2 and 10 characters long');
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (types.includes(type)) this.type = type;
        else throw new Error(`Invalid type value - "${type}". Valid values: ${types}`);
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}