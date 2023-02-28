import SuperCharacter from '../SuperCharacter';

test('testing the class SuperCharacter', () => {
  const result = new SuperCharacter('Trigun');
  const expected = {
    health: 100,
    level: 1,
    name: 'Trigun',
    _stoned: false,
  };

  expect(result).toEqual(expected);
});
