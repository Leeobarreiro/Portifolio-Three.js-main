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
    let side = new THREE.Vector3();

    // Define os vetores de movimento com base no tipo de cena
    switch(sceneType) {
        case 'office':
            forward.set(0, 1, -1);
            side.set(1, 0, 0);
            speed = 0.04;
            break;
        case 'arena':
            forward.set(0, 1, 0);
            side.set(1, 0, 0);
            speed = 0.1;
            break;
        // Adicione mais casos conforme necessário
    }

    forward.applyQuaternion(avatarRef.current.quaternion);
    side.applyQuaternion(avatarRef.current.quaternion);

    if (movement.forward) avatarRef.current.position.addScaledVector(forward, speed) ;
    if (movement.backward) avatarRef.current.position.addScaledVector(forward, -speed);
    if (movement.left) avatarRef.current.position.addScaledVector(side, -speed);
    if (movement.right) avatarRef.current.position.addScaledVector(side, speed);

    

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
