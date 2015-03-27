
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
  assert.equal(heap[0], 2, "Heap[0] = 2");
  assert.equal(heap[1], 4, "Heap[1] = 4");
  assert.equal(heap[2], 6, "Heap[2] = 6");
  assert.equal(heap[3], 8, "Heap[3] = 8");

  // Tear down.
  Module._free(dataPtr);

  // Pointer_make
  // https://groups.google.com/forum/#!topic/emscripten-discuss/JDaNHIRQ_G4
  //var jsList = [5, 6, 7, 8];
  //var cHeapPtr = Module.Pointer_make(jsList, 0, ALLOC_NORMAL, "i32");
  //var viewer = new Int32Array(Module.HEAPU8.buffer, cHeapPtr, jsList.length);
  //assert.equal(viewer[0], 5, "viewer[0] = 5");

  //Module._free(cHeapPtr);
});
