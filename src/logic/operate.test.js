import operate from './operate';

describe('testing operate.js', () => {
  test('checks summation of 2 numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  test('checks subtraction of 2 numbers', () => {
		expect(operate(10, 5, '-')).toBe('5');
	});
});
