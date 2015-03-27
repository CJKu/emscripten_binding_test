project(OpenCV CXX C)

cmake_minimum_required (VERSION 2.6)

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)
set(CMAKE_CXX_FLAGS  "${CMAKE_CXX_FLAGS} -std=c++11")

include_directories(AFTER ${CMAKE_CURRENT_LIST_DIR}/../include)

file(GLOB_RECURSE cpp_srcs
  "${CMAKE_CURRENT_LIST_DIR}/*.cpp"
)

add_library(embind_test SHARED ${cpp_srcs})

file(GLOB_RECURSE test_files
  "${CMAKE_CURRENT_LIST_DIR}/*.js"
  "${CMAKE_CURRENT_LIST_DIR}/*.html"
  "${CMAKE_CURRENT_LIST_DIR}/*.css"
)

add_custom_command (
  TARGET embind_test POST_BUILD
  COMMAND mkdir -p bin
  COMMAND cp ${test_files} ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}
  COMMAND emcc ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}/libembind_test.so -O3 --bind --llvm-lto 1 --closure 1 -s PRECISE_F32=1 -s FORCE_ALIGNED_MEMORY=1 -s TOTAL_MEMORY=306777216 -o ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}/asm.js
)

#add_custom_target (
#  clean
#  COMMAND rm -rf ${CMAKE_RUNTIME_OUTPUT_DIRECTORY}
#  COMMAND rm -rf ${CMAKE_LIBRARY_OUTPUT_DIRECTORY}
#)
