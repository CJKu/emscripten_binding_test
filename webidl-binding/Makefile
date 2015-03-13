EMSCRIPTEN_PATH := ~/repository/emscripten

build: glue.js
	@echo Build!
	emcc foo.cpp my_glue_wrapper.cpp --post-js glue.js -o output.js

glue.js: myclass.idl
	python $(EMSCRIPTEN_PATH)/tools/webidl_binder.py myclass.idl glue
