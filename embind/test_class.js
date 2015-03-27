QUnit.test("test_class", function(assert) {
  var test = new Module.OverloadingTest();
  assert.equal(test.foo(1), 1);
  assert.equal(test.foo(1, 1), 2);

  test = new Module.GetterWrapperTest();
  assert.equal(test.foo, 1);
});
