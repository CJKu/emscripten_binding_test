
class Foo {
public:
  Foo();
  Foo(int v) : mValue(v) {}
  int getVal();
  void setVal(int v);
private:
  int mValue;
};
