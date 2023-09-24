import Undead from '../undead';

test('should return an object with attack 25 and defense 25. Type - Undead.', () => {
    const undead = {
        name: 'test',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(new Undead('test')).toMatchObject(undead);
});