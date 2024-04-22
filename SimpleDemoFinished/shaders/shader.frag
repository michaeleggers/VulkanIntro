#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(location = 0) in vec4 fragColor;
layout(location = 1) in vec3 normal;

layout(location = 0) out vec4 outColor;

void main() {
    outColor = vec4(0.5 * normal + 0.5, 1.0);
}