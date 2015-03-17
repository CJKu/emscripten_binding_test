#include <emscripten/bind.h>
using namespace emscripten;

struct Size {
  int width;
  int height;
};

class CSize {
public:
  CSize() : mWidth(0), mHeight(0) { }
  int getWidth() const { return mWidth; }
  int getHeight() const { return mHeight; }
  void setWidth(int width) { mWidth = width; }
  void setHeight(int height) { mHeight = height; }

private:
  int mWidth;
  int mHeight;
};

void multiply_size(int32_t factor, Size &size) {
  size.width *= factor;
  size.height *= factor;
  //Debug code.
  //printf("size.width = %d.\n", size.width);
}
void multiply_csize_pointer(int32_t factor, CSize *size) {
  size->setWidth(size->getWidth() * factor);
  size->setHeight(size->getHeight() * factor);
}

void multiply_csize_ref(int32_t factor, CSize &size) {
  size.setWidth(size.getWidth() * factor);
  size.setHeight(size.getHeight() * factor);
}

EMSCRIPTEN_BINDINGS(ref_binding) {
  value_object<Size>("MySize")
    .field("width", &Size::width)
    .field("height", &Size::height)
    ;
  class_<CSize>("CSize")
    .constructor<>()
    .property("width", &CSize::getWidth, &CSize::setWidth)
    .property("height", &CSize::getHeight, &CSize::setHeight)
    ;
  function("multiply_csize_pointer", &multiply_csize_pointer, allow_raw_pointers());
  function("multiply_csize_ref", &multiply_csize_ref);
  function("multiply_size", &multiply_size);
}
