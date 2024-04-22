
cmake_minimum_required(VERSION 3.24)

project(VulkanRahmenprogrammLsgDEV VERSION 1.0)

find_package(Vulkan REQUIRED)

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/bin")
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/bin")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_SOURCE_DIR}/bin")

message("Cmake Vulkan Module Path: " ${Vulkan_INCLUDE_DIRS})
message("Cmake Vulkan Include Dir: " ${Vulkan_INCLUDE_DIR})

add_subdirectory(dependencies/vkal)

add_subdirectory(SimpleDemo)

set_property(GLOBAL PROPERTY USE_FOLDERS ON)

set_property(TARGET assimp          PROPERTY FOLDER "Libraries")
set_property(TARGET glfw            PROPERTY FOLDER "Libraries")
set_property(TARGET vkal            PROPERTY FOLDER "Libraries")



set_property(TARGET SimpleDemo        PROPERTY FOLDER "Demo Programs")




