import operate from './operate';

test('Summation of 2 numbers', () => {
  expect(operate(2, 3, '+')).toBe('5');
});
