#include "foo.h"

Foo::Foo()
  : mValue(0)
{

}

int Foo::getVal() {
  return mValue;
}

void Foo::setVal(int value) {
  mValue = value;
}
