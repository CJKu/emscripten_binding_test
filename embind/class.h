#ifndef CLASS_H_
#define CLASS_H_

class MyClass {
public:
  MyClass(int x, std::string y)
    : x(x)
    , y(y)
  {}

  void incrementX() {
    ++x;
  }


  int getX() const { return x; }
  void setX(int x_) { x = x_; }

  std::vector<int> return_vector_int() 
  {  
    std::vector<int> rt;
    rt.push_back(1);
    rt.push_back(2);

    return rt;
  }
  static std::string getStringFromInstance(const MyClass& instance) {
    return instance.y;
  }

private:
  int x;
  std::string y;
};

/*
class TestValueArray {
public:
  TestValueArray() {

  }

  void SetSize(Size v) {
    mSize = v;
  }

  // Add const?
  Size GetSize()  {
    return mSize;
  }

private:
  Size mSize;
};*/
#endif
