import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from './useKeyboardControls';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Avatar(props) {
  const avatarRef = useRef();
  const { nodes, materials } = useGLTF("models/avatar.glb");
  const movement = useKeyboardControls();

  useFrame(() => {
    if (!avatarRef.current) return;

    const speed = 0.05;
    // Vetores de direção baseados na orientação do mundo
    const forward = new THREE.Vector3(0, 0, -1);
    const up = new THREE.Vector3(0, 1, 0);
    const side = new THREE.Vector3(-1, 0, 0);

    // Aplica a rotação do avatar aos vetores de direção
    forward.applyQuaternion(avatarRef.current.quaternion);
    side.applyQuaternion(avatarRef.current.quaternion);

    if (movement.forward) avatarRef.current.position.addScaledVector(forward, speed);
    if (movement.backward) avatarRef.current.position.addScaledVector(forward, -speed);
    if (movement.left) avatarRef.current.position.addScaledVector(side, speed);
    if (movement.right) avatarRef.current.position.addScaledVector(side, -speed);

    // Limita a posição do avatar dentro dos limites definidos
    const bounds = {
      minX: -10,
      maxX: 10,
      minY: 0, // Ajuste conforme necessário para o chão
      maxY: 5, // Ajuste conforme necessário para o limite superior
      minZ: -10,
      maxZ: 10
    };

    avatarRef.current.position.x = Math.max(bounds.minX, Math.min(bounds.maxX, avatarRef.current.position.x));
    avatarRef.current.position.y = Math.max(bounds.minY, Math.min(bounds.maxY, avatarRef.current.position.y));
    avatarRef.current.position.z = Math.max(bounds.minZ, Math.min(bounds.maxZ, avatarRef.current.position.z));
  });


  return (
    
      <mesh  ref={avatarRef} {...props} dispose={null} scale={0.35}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        position={[1, -0.2, -2]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    
  )
}

useGLTF.preload("models/avatar.glb");