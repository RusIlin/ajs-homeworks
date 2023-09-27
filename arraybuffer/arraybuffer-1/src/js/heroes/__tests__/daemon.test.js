import Daemon from '../daemon';

test('', () => {
    const daemon = new Daemon(100);
    expect(daemon.calculateAttack(1)).toBe(100);
});

test('', () => {
    const daemon = new Daemon(100);
    expect(daemon.calculateAttack(5)).toBe(60);
});

test('', () => {
    const daemon = new Daemon(100);
    daemon.stoned = true;
    expect(daemon.calculateAttack(2)).toBe(85);
});

test('', () => {
    const daemon = new Daemon();
    expect(daemon.calculateAttack(2)).toBe(9);
});