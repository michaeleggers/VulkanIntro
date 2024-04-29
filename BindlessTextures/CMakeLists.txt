cmake_minimum_required(VERSION 3.24)
project(BindlessTextures VERSION 1.0)

file(GLOB_RECURSE SRC_FILES LIST_DIRECTORIES false RELATIVE
     ${CMAKE_CURRENT_SOURCE_DIR} *.c??)
file(GLOB_RECURSE HEADER_FILES LIST_DIRECTORIES false RELATIVE
     ${CMAKE_CURRENT_SOURCE_DIR} *.h)   

add_executable(BindlessTextures
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
    ../dependencies/stb/stb_image.h
)

set (VULKAN_INCLUDE ${Vulkan_INCLUDE_DIR})
target_include_directories(BindlessTextures PUBLIC
    ../dependencies
    ../dependencies/imgui    
    ../dependencies/glm
    ../dependencies/assimp/include
    ${Vulkan_INCLUDE_DIR}
)

target_link_libraries(BindlessTextures
    PUBLIC vkal
    PUBLIC assimp
)

set_property(TARGET BindlessTextures PROPERTY CXX_STANDARD 11)
set_property(TARGET BindlessTextures PROPERTY VS_DEBUGGER_WORKING_DIRECTORY "${CMAKE_SOURCE_DIR}/BindlessTextures")
