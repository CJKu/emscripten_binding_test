
QUnit.test("test_pass_vector", function(assert) {
  var v = new Module.VectorInt();
  assert.equal(0, v.size(), "We assume no item in vector.");

  // pushSomethingIntoVector will push one item into this vector
  Module.pushSomethingIntoVector(v);
  assert.equal(1, v.size(), "We assume one item in vector.");
});
