import Validator from '../formator';

test('', () => {
    const number = '8 (927) 000-00-00';
    const result = '+79270000000';
    expect(Validator.formatPhone(number)).toBe(result);
});

test('', () => {
    const number = '+7 960 000 00 00';
    const result = '+79600000000';
    expect(Validator.formatPhone(number)).toBe(result);
});

test('', () => {
    const number = '+86 000 000 0000';
    const result = '+860000000000';
    expect(Validator.formatPhone(number)).toBe(result);
});

test('', () => {
    const number = '+65 000 000 000';
    const result = '+65000000000';
    expect(Validator.formatPhone(number)).toBe(result);
});