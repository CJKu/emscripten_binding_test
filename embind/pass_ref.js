
QUnit.test("test_pass_ref", function(assert) {
  // value_object binding.
  var mySize = {}
  mySize.width = 1;
  mySize.height = 2;

  Module.multiply_size(2, mySize);

  // Not work. value_object is passed by value.
  assert.equal(mySize.width, 1, "mySize.width = 1");
  assert.equal(mySize.height, 2, "mySize.height = 2");

  // object binding.
  var csize = new Module.CSize();
  csize.width = 1;
  csize.height = 2;

  // Pass by pointer here.
  Module.multiply_csize_pointer(2, csize);
  assert.equal(csize.width, 2, "csize.width = 2");
  assert.equal(csize.height, 4, "csize.height = 4");

  // Pass by reference here.
  Module.multiply_csize_ref(2, csize);
  assert.equal(csize.width, 4, "csize.width = 4");
  assert.equal(csize.height, 8, "csize.height = 8");
});
