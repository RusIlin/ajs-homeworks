import Settings from '../settings';

test('should return an array of settings', () => {
    const settings = new Settings();
    settings.user.set('theme', 'light');
    const result = new Map([['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy']]);
    expect(settings.settings).toEqual(result);
});