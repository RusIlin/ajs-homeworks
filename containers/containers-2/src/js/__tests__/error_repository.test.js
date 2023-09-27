import ErrorRepository from '../error_repository';

test('should return "error 1"', () => {
    const errorRepository = new ErrorRepository([[1, 'error 1'], [2, 'error 2']]);
    expect(errorRepository.translate(1)).toBe('error 1');
});

test('should return Unknown error', () => {
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate(1)).toBe('Unknown error');
});