import sortingHeroes from '../app';

test('should correctly sort the array with different values of the health of the heroes', () => {
    const received = sortingHeroes([
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ]);
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];
    expect(received).toEqual(expected);
});

test('should correctly sort the array with the same health values of the heroes', () => {
    const received = sortingHeroes([
        { name: 'мечник', health: 1 },
        { name: 'маг', health: 0 },
        { name: 'лучник', health: 1 },
    ]);
    const expected = [
        { name: 'лучник', health: 1 },
        { name: 'мечник', health: 1 },
        { name: 'маг', health: 0 },
    ];
    expect(received).toEqual(expected);
});