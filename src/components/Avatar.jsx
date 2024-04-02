/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useKeyboard } from './useKeyboard'; // Supondo que você tenha um hook personalizado para teclado


export function Avatar(props) {
  const { animation } = props;
  
  
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: false,
    cursorFollow: false,
    wireframe: false,
  });
  const group = useRef();
  const { nodes, materials } = useGLTF("models/avatar.glb");
  

  const { animations: typingAnimation } = useFBX("animations/Typing.fbx");
  
  const { animations: standingAnimation } = useFBX(
    "animations/Standing Idle.fbx"
  );
  const { animations: fallingAnimation } = useFBX(
    "animations/Falling Idle.fbx"
  );

  typingAnimation[0].name = "Typing";
  standingAnimation[0].name = "Standing";
  fallingAnimation[0].name = "Falling";

  const { actions } = useAnimations(
    [typingAnimation[0], standingAnimation[0], fallingAnimation[0]],
    group
  );

  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
  });
  const { moveForward, moveBackward, moveLeft, moveRight } = useKeyboard();

  // Velocidade de movimento do avatar
  const speed = 1;

  useFrame(() => {
    if (group.current) {
        if (moveForward) {
            group.current.position.z -= speed;
            console.log(`Moving forward: ${group.current.position.z}`);
        }
        if (moveBackward) {
            group.current.position.z += speed;
            console.log(`Moving backward: ${group.current.position.z}`);
        }
        if (moveLeft) {
            group.current.position.x -= speed;
            console.log(`Moving left: ${group.current.position.x}`);
        }
        if (moveRight) {
            group.current.position.x += speed;
            console.log(`Moving right: ${group.current.position.x}`);
        }
    }
});

  
  

  return (
    <group {...props} dispose={null} scale={0.35}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.palette}
        position={[1, -0.2, -2]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload("models/avatar.glb");