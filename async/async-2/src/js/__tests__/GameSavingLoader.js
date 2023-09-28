import GameSavingLoader from '../GameSavingLoader';


jest.setTimeout(5000);

test('testing response is exactly an proper instance of Object', async () => {
  expect.assertions(1);
  try {
    const save = await GameSavingLoader.load();
    expect(save).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });
  } catch (e) {
    console.log(e);
  }
});
