import calculate from './calculate';

describe('testing calculate.js', () => {
  test('function returns object', () => {
    expect(
      calculate(
        {
          total: null,
          next: null,
          operation: null,
        },
        'AC',
      ),
    ).toMatchObject({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('click on first number', () => {
		const obj = {
			total: null,
			next: null,
			operation: null,
		};
		const result = calculate(obj, '9');
		expect(result.next).toEqual('9');
	});
});
