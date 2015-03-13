
// Bindings utilities

function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts a value into a C-style string.
var ensureString = (function() {
  var stringCache = {};
  function ensureString(value) {
    if (typeof value == 'string') {
      var cachedVal = stringCache[value];
      if (cachedVal) return cachedVal;
      var ret = allocate(intArrayFromString(value), 'i8', ALLOC_STACK);
      stringCache[value] = ret;
      return ret;
    }
    return value;
  }
  return ensureString;
})();


// VoidPtr
function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
}
// Foo
function Foo(arg0) {
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  if (arg0 === undefined) { this.ptr = _emscripten_bind_Foo_Foo_0(); getCache(Foo)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_Foo_Foo_1(arg0);
  getCache(Foo)[this.ptr] = this;
};
Foo.prototype = Object.create(WrapperObject.prototype);
Foo.prototype.constructor = Foo;
Foo.prototype.__class__ = Foo;
Foo.__cache__ = {};
Module['Foo'] = Foo;

Foo.prototype['getVal'] = function() {
  var self = this.ptr;
  return _emscripten_bind_Foo_getVal_0(self);
};

Foo.prototype['setVal'] = function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  else arg0 = ensureString(arg0);
  _emscripten_bind_Foo_setVal_1(self, arg0);
};

  Foo.prototype['__destroy__'] = function() {
  var self = this.ptr;
  _emscripten_bind_Foo___destroy___0(self);
}
