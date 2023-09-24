import Swordsman from '../swordsman';

test('should return an object with attack 40 and defense 10. Type - Swordsman.', () => {
    const swordsman = {
        name: 'test',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(new Swordsman('test')).toMatchObject(swordsman);
});