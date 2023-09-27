import Magician from '../magician';

test('', () => {
    const magician = new Magician(100);
    expect(magician.calculateAttack(1)).toBe(100);
});

test('', () => {
    const magician = new Magician(100);
    expect(magician.calculateAttack(5)).toBe(60);
});

test('', () => {
    const magician = new Magician(100);
    magician.stoned = true;
    expect(magician.calculateAttack(2)).toBe(85);
});

test('', () => {
    const magician = new Magician();
    expect(magician.calculateAttack(2)).toBe(9);
});