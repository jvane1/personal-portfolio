/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 earth.gltf 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-f7a76c63ff1846afb2d606e5c8369c15
Title: Earth
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

const Earth = (props) => {
  const { nodes, materials } = useGLTF("/earth.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={1.5}
      ></mesh>
    </group>
  );
};

useGLTF.preload("/earth.gltf");

export default Earth;
