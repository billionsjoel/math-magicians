import calculate from './calculate';

test('should first', () => {
	expect(
		calculate(
			{
				total: null,
				next: null,
				operation: null,
			},
			'AC'
		)
	)
});
