#include <emscripten/bind.h>
using namespace emscripten;

// https://github.com/kripken/emscripten/issues/612#issuecomment-18428394
// embind supports raw pointers to classes and smart pointers to classes. embind
// does not (and for which I have no plan to add) support for pointers to
// primitives like float* and int*.
void float_multiply_array(int32_t factor, uintptr_t buffer, int length) {
  //Debug code.
  //printf("buffer = %d.\n", buffer);

  int32_t *arr = reinterpret_cast<int32_t *>(buffer);
  for (int i = 0; i <  length; i++) {
    arr[i] = factor * arr[i];
  }
}

EMSCRIPTEN_BINDINGS(my_functionis) {
  function("float_multiply_array", &float_multiply_array, allow_raw_pointers());
}
