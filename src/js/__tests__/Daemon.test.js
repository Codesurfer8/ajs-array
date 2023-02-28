import Daemon from '../Daemon';

test('testing the class Daemon', () => {
  const result = new Daemon('Trigun');
  const expected = {
    defense: 40,
    health: 100,
    level: 1,
    name: 'Trigun',
    type: 'Daemon',
    _attack: 10,
    _stoned: false,
  };

  expect(result).toEqual(expected);
});
