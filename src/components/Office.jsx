import React, { useMemo } from 'react';
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Avatar } from './Avatar'; // Certifique-se de que o caminho está correto

export function Office(props) {
  const { nodes, materials } = useGLTF("/models/scene.glb");
  const texture = useTexture("/textures/baked.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  // Lista dos nomes dos meshes que não devem causar colisões
  const nonCollidableMeshNames = [
    'base_fireRed_material_0',
    'tiles_fireRed_material_0',
    'carpet_A_fireRed_material_0',
    'carpet_B_fireRed_material_0',
  ];

  // Filtra os obstáculos para excluir os especificados
  const obstacles = useMemo(() => {
    return Object.values(nodes)
      .filter(node => 
        node.isMesh && !nonCollidableMeshNames.includes(node.name)
      );
  }, [nodes]);
return (
  <group {...props} dispose={null}>
      <Avatar sceneType="office" bounds={{ minX: -4, maxX: 5.7, minY: 0, maxY: 0, minZ: -3, maxZ: 3.8 }} obstacles={obstacles} />

    <mesh
      castShadow
      receiveShadow
      geometry={nodes.base_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.tiles_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.chair_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.table_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Computer_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.TV_stand_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.TV_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.carpet_A_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.carpet_B_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.bed_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.dresser_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.bookShelf_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.NES_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.railing_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.stairs_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.wall_picture_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.ambient_occlusion_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.title_fireRed_material_0.geometry}
      material={materials.fireRed_material}
    />
  </group>
)
}

useGLTF.preload("models/scene.glb");



