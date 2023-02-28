import Magician from '../Magician';

test('testing the class Magician', () => {
  const result = new Magician('Trigun');
  const expected = {
    defense: 40,
    health: 100,
    level: 1,
    name: 'Trigun',
    type: 'Magician',
    _attack: 100,
    _stoned: false,
  };

  expect(result).toEqual(expected);
});
