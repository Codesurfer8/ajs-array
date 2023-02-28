import Character from '../Character';

test('testing the class Character', () => {
  const result = new Character('Trigun');
  const expected = {
    name: 'Trigun',
    level: 1,
    health: 100,
  };
  expect(result).toEqual(expected);
});
