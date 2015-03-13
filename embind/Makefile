CPPFLAGS = -I ~/repository/emscripten/system/include
HEADERS = class.h quick_example.h
CPPS = quick_example.cpp binding.cpp function.cpp pass_vector.cpp
OUTPUT := asm.js

build: $(OUTPUT)
	@echo "Build it"

clean:
	@rm $(OUTPUT)

run:
	firefox quick_example.html

$(OUTPUT): $(CPPS) $(HEADERS)
	@echo -n "target = "
	@echo $@
	emcc --bind $(CPPFLAGS) -o $@ $(CPPS)

