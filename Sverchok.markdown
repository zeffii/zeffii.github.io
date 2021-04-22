# Sverchok

### flow control / visual programming for Blender3D

Periodically in development by a [core team](https://github.com/nortikin/sverchok/graphs/contributors), but always open to pull requests / bug reports and suggestions on the [issue-tracker](https://github.com/nortikin/sverchok/issues).
  
Conceptually similar to any other visual programming tool aimed at creating parametric forms. It allows the user to connect logical elements together and chain them much like a _formula_ or _function_. Feed inputs, operate on those inputs, then output the result either to openGL or Blender Meshes.

Sverchok has many nodes that leverage the speed and power of `numpy` to go far beyond what `bpy` (and therefore vanilla `python`) can offer. We have also added support for several 3rd party python libraries, and a `scripted node` which lets you write your own node succinctly.
