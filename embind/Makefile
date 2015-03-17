CPPFLAGS = -I ~/repository/emscripten/system/include
HEADERS = class.h quick_example.h
CPPS = pass_primitive_pointer.cpp pass_ref.cpp pass_vector.cpp
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

