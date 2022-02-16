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

  test('checks if clicked on first number', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, '9');
    expect(result.next).toEqual('9');
  });

  test('checks if clicked on an operation', () => {
    const obj = {
      total: null,
      next: '1',
      operation: null,
    };
    const result = calculate(obj, '+');
    expect(result.operation).toEqual('+');
  });

  test('checks if clicked on second number after operation', () => {
    const obj = {
      total: '5',
      next: null,
      operation: '-',
    };
    const result = calculate(obj, '2');
    expect(result.total).toEqual('5');
    expect(result.next).toEqual('2');
    expect(result.operation).toEqual('-');
  });

    test('checks if operation works when = is clicked', () => {
			const obj = {
				total: '4',
				next: '2',
				operation: '÷',
			};
			const result = calculate(obj, '=');
			expect(result.total).toEqual('2');
		});
});
