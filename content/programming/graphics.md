---
title: Graphics
tags:
- computer
- graphics
- opengl
- gpu
- pixel
- render
- draw
---

# Graphics

<TagLinks />

::: quote
How pixel is drawn on screen?
:::

Graphics are candidates for [System Programming](https://en.wikipedia.org/wiki/Systems_programming)

## OpenGL

* `OpenGL` is a GPU usage specification, is **NOT** a library or framework
  * communication between CPU and GPU
  * GPU builds actual array of colors which is then sent to electronics that runs the screen
  * OpenGL lets you access graphics hardware or GPU
  * `directx`, `vulkan`, `direct3d`
* How do I download it?
  * GPU manufacturer ships the implementation, like NVIDIA with GPU drivers
  * `vulkan` cross platform

```mermaid
graph LR
A(CPU):::blue
B([OpenGL]):::orange
C(GPU):::purple
D(ScreenAPI):::yellow
E(pixel):::green
A --> B --> C --> D --> E
classDef green fill:#1f9,stroke-width:0px;
classDef orange fill:#f96,stroke-width:0px;
classDef yellow fill:#FFE873,stroke-width:0px;
classDef blue fill:#b8d4ff,stroke-width:0px;
classDef purple fill:#f9f,stroke:#333,stroke-width:0px;
```

* Shader is s/w that runs on GPU
* C++ for OpenGL
* How to draw a window on a computer?
  * OS provides APIs for Windowing System
    * specific to OS. How about a library which can issue commands for all OS?
  * `GLFW`

<iframe width="560" height="315" src="https://www.youtube.com/embed/W3gAzLwfIP0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Specifications

* How to read specification like a pro?
  * What issue does it solve?
  * How does it solve it?

## Related

* [System programming](/programming/systemprogramming.md)
*

## Resources

* [OpenGL Playlist](https://www.youtube.com/playlist?list=PLlrATfBNZ98foTJPJ_Ev03o2oq3-GGOS2)


<Footer />
