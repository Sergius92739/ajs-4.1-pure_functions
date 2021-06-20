import checkPlayersHealth from '../js/players';

test('Проверка на значение больше 50', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('Проверка на значение равно 50', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 50 })).toBe('wounded');
});

test('Проверка на значение меньше 50 и больше 15', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('Проверка на значение равно 15', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('Проверка на значение меньше 15', () => {
  expect(checkPlayersHealth({ name: 'Маг', health: 10 })).toBe('critical');
});