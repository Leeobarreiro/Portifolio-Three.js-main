import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Avatar } from './Avatar'; // Certifique-se de que o caminho está correto
import { Cyntia } from './cyntia';


export function Arena(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/arena.glb')
  const arenaBounds = {
    minX: -10,
    maxX: 10,
    minY: -5, // Ajuste conforme necessário, por exemplo, para o chão e o teto da arena
    maxY: 5,
    minZ: -10,
    maxZ: 10
};
  
  return (
    <group ref={group} {...props} dispose={null} position={[1, -1.5, 0]}>
      <group name="Sketchfab_Scene" rotation={[1, 0, 0]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2 , 0, 0]} scale={0.6}>
          <group name="FireRed_Lorelei_IndigoPlateaufbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Lorelei_Gym_GRP">
                  <group name="Floor_GRP">
                    <group name="floor_below">
                    <Avatar sceneType="arena" bounds={arenaBounds} />
                    <Cyntia sceneType="arena" />

                      <mesh
                        name="floor_below_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.floor_below_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group name="floor">
                      <mesh
                        name="floor_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.floor_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                  </group>
                  <group name="Walls_GRP">
                    <group name="wall_front">
                      <mesh
                        name="wall_front_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.wall_front_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group name="wall_back">
                      <mesh
                        name="wall_back_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.wall_back_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group name="wall_left">
                      <mesh
                        name="wall_left_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.wall_left_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group name="wall_right">
                      <mesh
                        name="wall_right_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.wall_right_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                  </group>
                  <group name="Ice_Pillar_GRP">
                    <group
                      name="ice_pillar_00"
                      position={[-1.298, 0.025, -0.679]}
                      scale={[0.772, 0.666, 0.772]}>
                      <mesh
                        name="ice_pillar_00_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ice_pillar_00_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group
                      name="ice_pillar_01"
                      position={[-1.298, 0.025, -3.679]}
                      scale={[0.772, 0.666, 0.772]}>
                      <mesh
                        name="ice_pillar_01_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ice_pillar_01_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group
                      name="ice_pillar_02"
                      position={[-1.298, 0.025, -6.179]}
                      scale={[0.772, 0.666, 0.772]}>
                      <mesh
                        name="ice_pillar_02_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ice_pillar_02_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group
                      name="ice_pillar_03"
                      position={[6.702, 0.025, -0.679]}
                      scale={[0.772, 0.666, 0.772]}>
                      <mesh
                        name="ice_pillar_03_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ice_pillar_03_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group
                      name="ice_pillar_04"
                      position={[6.702, 0.025, -3.679]}
                      scale={[0.772, 0.666, 0.772]}>
                      <mesh
                        name="ice_pillar_04_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ice_pillar_04_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                    <group
                      name="ice_pillar_05"
                      position={[6.702, 0.025, -6.179]}
                      scale={[0.772, 0.666, 0.772]}>
                      <mesh
                        name="ice_pillar_05_fireRed_loreleiRoom_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.ice_pillar_05_fireRed_loreleiRoom_0.geometry}
                        material={materials.fireRed_loreleiRoom}
                      />
                    </group>
                  </group>
                  <group name="door">
                    <mesh
                      name="door_fireRed_loreleiRoom_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.door_fireRed_loreleiRoom_0.geometry}
                      material={materials.fireRed_loreleiRoom}
                    />
                  </group>
                  <group name="ice_pillar_outline">
                    
                  </group>
                  <group name="arena">
                    <mesh
                      name="arena_fireRed_loreleiRoom_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.arena_fireRed_loreleiRoom_0.geometry}
                      material={materials.fireRed_loreleiRoom}
                    />
                  </group>
                  <group name="water" position={[0, 0.092, -0.25]}>
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes['0'].geometry}
                      material={materials.fireRed_loreleiRoom}
                      morphTargetDictionary={nodes['0'].morphTargetDictionary}
                      morphTargetInfluences={nodes['0'].morphTargetInfluences}
                    />
                  </group>
                  <group name="misc" position={[0, -0.335, 0]}>
                    <mesh
                      name="misc_fireRed_loreleiRoom_misc_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.misc_fireRed_loreleiRoom_misc_0.geometry}
                      material={materials.fireRed_loreleiRoom_misc}
                    />
                    
                  </group>
                </group>
                <group name="Water_Blend_GRP" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/arena.glb')