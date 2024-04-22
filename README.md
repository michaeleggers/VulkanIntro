# Repo containing the code discussing Descriptor Sets in Vulkan


Clone with
```
git clone --recurse-submodules https://github.com/michaeleggers/VulkanIntro.git
```

If you already cloned without --recurse-submodules, init the submodules with:
```
git submodule update --init --recursive
```

# Build using CMake

```cd``` into a newly created folder within this repos root-folder and do
```
cmake ..
```

This will build the default configuration for your system using GLFW as a windowing backend.

# Flowchart of how Descriptor Sets are created and how the layout reflects the shader:

![descriptor_set_creation_rasterizer_v9_no_twitter](https://github.com/michaeleggers/VulkanIntro/assets/11651836/2bac0135-c8f1-4549-800a-d46d9738b7be)
