import Daemon from '../daemon';

test('should return an object with attack 10 and defense 40. Type - Daemon.', () => {
    const daemon = {
        name: 'test',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(new Daemon('test')).toMatchObject(daemon);
});