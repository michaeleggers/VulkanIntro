cmake_minimum_required(VERSION 3.24)
project(SimpleDemo VERSION 1.0)

file(GLOB_RECURSE SRC_FILES LIST_DIRECTORIES false RELATIVE
     ${CMAKE_CURRENT_SOURCE_DIR} *.c??)
file(GLOB_RECURSE HEADER_FILES LIST_DIRECTORIES false RELATIVE
     ${CMAKE_CURRENT_SOURCE_DIR} *.h)   

add_executable(SimpleDemo
    ${SRC_FILES}
    ${HEADER_FILES}
    shaders/shader.vert
    shaders/shader.frag
    ../dependencies/stb/stb_image.h
    ../dependencies/utils/model.cpp
    ../dependencies/utils/model.h
    ../dependencies/utils/camera.cpp
    ../dependencies/utils/camera.h
    ../dependencies/vkal/src/examples/utils/platform.cpp
    ../dependencies/vkal/src/examples/utils/platform.h
    ../dependencies/modelloader/Model.cpp
    ../dependencies/modelloader/Model.h
    ../dependencies/imgui/backends/imgui_impl_glfw.cpp
    ../dependencies/imgui/backends/imgui_impl_glfw.h
    ../dependencies/imgui/backends/imgui_impl_vulkan.cpp
    ../dependencies/imgui/backends/imgui_impl_vulkan.h
    ../dependencies/imgui/imgui.cpp
    ../dependencies/imgui/imgui.h
    ../dependencies/imgui/imgui_draw.cpp
    ../dependencies/imgui/imgui_tables.cpp
    ../dependencies/imgui/imgui_widgets.cpp
    ../dependencies/utils/imgui_helper.cpp
    ../dependencies/utils/imgui_helper.h
)

set (VULKAN_INCLUDE ${Vulkan_INCLUDE_DIR})
target_include_directories(SimpleDemo PUBLIC
    ../dependencies
    ../dependencies/imgui    
    ${Vulkan_INCLUDE_DIR}
)

target_link_libraries(SimpleDemo
    PUBLIC vkal
)

set_property(TARGET SimpleDemo PROPERTY CXX_STANDARD 11)
set_property(TARGET SimpleDemo PROPERTY VS_DEBUGGER_WORKING_DIRECTORY "${CMAKE_SOURCE_DIR}/SimpleDemo")