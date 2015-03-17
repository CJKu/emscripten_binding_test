// quick_example.cpp
#include <emscripten/bind.h>
#include "quick_example.h"
#include "class.h"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(my_module) {
  function("lerp", &lerp);
}

EMSCRIPTEN_BINDINGS(my_class_example) {
  register_map<int,int>("MapIntInt");
  class_<MyClass>("MyClass")
    .constructor<int, std::string>()
    .function("incrementX", &MyClass::incrementX)
    .function("return_vector_int", &MyClass::return_vector_int)
    .property("x", &MyClass::getX, &MyClass::setX)
    .class_function("getStringFromInstance", &MyClass::getStringFromInstance)
    ;

  class_<TestValueArray>("TestValueArray")
    .constructor<>()
    .function("setSize", &TestValueArray::SetSize)
    .function("getSize", &TestValueArray::GetSize)
    ;
}
