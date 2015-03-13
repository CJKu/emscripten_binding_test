
QUnit.test("test_pass_buffer", function(assert) {
  // An example which is work. 
  // https://groups.google.com/forum/#!topic/emscripten-discuss/oeEg6WrZ7rg
  // Good artical, but sample code is not work
  // http://kapadia.github.io/emscripten/2013/09/13/emscripten-pointers-and-pointers.html
  var data = new Int32Array([1,2,3,4]);
  var dataPtr = Module._malloc(data.length * 4);
  var heap = new Int32Array(Module.HEAP32.buffer, dataPtr, data.length * 4);
  heap.set(new Int32Array(data.buffer));

  Module.float_multiply_array(2, heap.byteOffset, data.length);

  // heap should be altered to [2, 4, 6, 8].
  assert.equal(2, heap[0], "Heap[0] = 2");
  assert.equal(4, heap[1], "Heap[1] = 4");
  assert.equal(6, heap[2], "Heap[2] = 6");
  assert.equal(8, heap[3], "Heap[3] = 8");
});
