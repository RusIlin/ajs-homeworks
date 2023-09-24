import Bowman from '../bowman';

test('should return an object with attack 25 and defense 25. Type - Bowman.', () => {
    const bowman = {
        name: 'test',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(new Bowman('test')).toMatchObject(bowman);
});