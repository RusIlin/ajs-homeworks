import Character from '../character';

test('should return an object', () => {
    const character = {
        name: 'test',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 100,
        defence: 100,
    };
    expect(new Character('test', 'Bowman', 100, 100)).toMatchObject(character);
});

test('should throw an error about a name too long', () => {
    expect(() => new Character('12345678910', 'Bowman', 100, 100)).toThrowError(new Error('The class name must be between 2 and 10 characters long'));
});

test('should throw an error about the wrong type of object', () => {
    expect(() => new Character('test11', 'test', 100, 100)).toThrowError(new Error('Invalid type value - "test". Valid values: Bowman,Swordsman,Magician,Daemon,Undead,Zombie'));
});