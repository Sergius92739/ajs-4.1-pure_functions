import checkPlayersHealth from '../js/players';

test('Checking for a value greater than 50', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('Checking for value is 50', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('Checking for a value less than 50 and more than 15', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('Checking for value is 15', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('Проверка на значение меньше 15', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 10 })).toBe('critical');
});
