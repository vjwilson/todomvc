it('should have a localStorage mock', () => {
  console.log('window.localStorage', window.localStorage);

  var foo = "bar";

  window.localStorage.setItem('foo', foo);

  var baz = window.localStorage.getItem('foo');

  expect(baz).toEqual(foo);
});
