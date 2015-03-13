#include <emscripten/bind.h>
using namespace emscripten;

// Pass by "reference"!
void pushSomethingIntoVector(std::vector<int32_t> &v) {
  v.push_back(101);
}

EMSCRIPTEN_BINDINGS(vecter_passing) {
  // register here so that you can create vector<int32_t> at JS side.
  // Refer to pass_vector.js
  register_vector<int32_t>("VectorInt");
  function("pushSomethingIntoVector", &pushSomethingIntoVector);
}
