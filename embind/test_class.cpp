#include <emscripten/bind.h>
using namespace emscripten;

class OverloadingTest {
public:
  int foo(int) { return 1; }
  int foo(int, int) { return 2; }
  // Can not bind a function with "..." parameter
  int foo(int, ...) { return 3; }

  template<typename _T> _T moo() { return _T(); }
};

class GetterWrapperTest {
public:
  // Export a public data without inheritance or intrusively add any extra
  // functions in this class.
  int foo = 1;
};

// Try to remove const modifier and see what error comes in compilation process.
int GetterWrapperTest_getFoo(const GetterWrapperTest &test)
{
  return test.foo;
}

EMSCRIPTEN_BINDINGS(class_binding) {
  class_<OverloadingTest>("OverloadingTest")
    .constructor<>()
    // Export foo overloading member functions.
    .function("foo", (int (OverloadingTest::*)(int)) &OverloadingTest::foo)
    .function("foo", (int (OverloadingTest::*)(int,int)) &OverloadingTest::foo)
   // .function("moo", (template )
    ;
  class_<GetterWrapperTest>("GetterWrapperTest")
    .constructor<>()
    // Setter is optional
    .property("foo", &GetterWrapperTest_getFoo)
    ;
}
