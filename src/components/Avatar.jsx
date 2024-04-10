import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from './useKeyboardControls';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Avatar({ sceneType, bounds = { minX: -Infinity, maxX: Infinity, minY: -Infinity, maxY: Infinity, minZ: -Infinity, maxZ: Infinity }, ...props }) {
  const avatarRef = useRef();
  
  const { nodes, materials } = useGLTF("models/avatar.glb");
  const movement = useKeyboardControls();

  

  useFrame(() => {
    if (!avatarRef.current) return;

    let speed = 0.05;
    let forward = new THREE.Vector3();
    let backward = new THREE.Vector3();
    let left = new THREE.Vector3();
    let right = new THREE.Vector3();
    let direction = new THREE.Vector3();
  
    // Define os vetores de movimento com base no tipo de cena
    switch(sceneType) {
        case 'office':
            forward.set(0, 0, -1);
            backward.set(0, 0, 1);
            right.set(1, 0, 0);
            left.set(-1, 0, 0);
            speed = 0.05;
            break;
        case 'arena':
            forward.set(0, 0, -1);
            backward.set(0, 0, 1);
            left.set(-1, 0, 0);
            right.set(1, 0, 0);
            speed = 0.1;
            break;
        // Adicione mais casos conforme necessário
    }

    // Calcula a direção de movimento combinada
if (movement.forward) direction.add(forward);
if (movement.backward) direction.sub(forward); // Usar sub para mover na direção oposta
if (movement.left) direction.sub(right); // Usar sub para esquerda, considerando 'right' como direção base
if (movement.right) direction.add(right);

// Normaliza a direção para garantir consistência na velocidade
direction.normalize().multiplyScalar(speed);

// Atualiza a posição do avatar
avatarRef.current.position.add(direction);

 // Se houver movimento, ajuste a rotação do avatar
 if (direction.lengthSq() > 0) {
  const angle = Math.atan2(direction.x, direction.z);
  avatarRef.current.rotation.z = angle;
}

    // Aplica os limites específicos da cena
    avatarRef.current.position.clamp(new THREE.Vector3(bounds.minX, bounds.minY, bounds.minZ), new THREE.Vector3(bounds.maxX, bounds.maxY, bounds.maxZ));
  });

  return (
    <mesh ref={avatarRef} {...props} dispose={null} scale={0.5}
      castShadow
      receiveShadow
      geometry={nodes.Object_2.geometry}
      material={materials.palette}
      position={[1, -0.2, -2]}
      rotation={[-Math.PI / 2, 0, 0]}  
    />
  );
}

useGLTF.preload("models/avatar.glb");
  