import Magician from '../magician';

test('should return an object with attack 10 and defense 40. Type - Magician.', () => {
    const magician = {
        name: 'test',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(new Magician('test')).toMatchObject(magician);
});