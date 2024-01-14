/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 src/assets/models/janet.glb 
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import baseScene from "../assets/models/janet.glb";
import { useFrame } from "@react-three/fiber";

export function Janet({ props, handleCharacterMove }) {
  const group = useRef();
  const characterRef = useRef();
  const { nodes, materials, animations } = useGLTF(baseScene);
  const { actions } = useAnimations(animations, group);

  const [janet, setJenet] = useState(true);

  useEffect(() => {
    console.log(actions);
    actions["autorig_actor|A|Default.001"].play();

    // const timer = setTimeout(() => {
    //   actions["autorig_actor|A|Default.001"].stop();
    //   setJenet(false);
    // }, 13000);

    // return () => clearTimeout(timer);
  }, []);

  // useFrame(({ camera }) => {
  //   // Your logic to move the character forward
  //   // const newCameraPosition = camera.position.clone();
  //   // newCameraPosition.z = characterRef.current.position.z;
  //   // camera.position.copy(newCameraPosition);

  //   characterRef.current.position.z -= 0.01; // Adjust the movement as needed
  //   handleCharacterMove();
  //   // onMove(newCameraPosition.toArray());
  // });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          ref={characterRef}
          name="autorig_actor"
          scale={0.0017}
          position={[0.5, -2.5, -10.9]}
          rotation={[0, -25.2, 0]}
        >
          <primitive object={nodes.RL_BoneRoot} />
          <skinnedMesh
            name="Bang_001001"
            geometry={nodes.Bang_001001.geometry}
            material={materials.A_Hair}
            skeleton={nodes.Bang_001001.skeleton}
          />
          <skinnedMesh
            name="Boots_002001"
            geometry={nodes.Boots_002001.geometry}
            material={materials.Boots}
            skeleton={nodes.Boots_002001.skeleton}
          />
          <group name="Camila_Brow_001002">
            <skinnedMesh
              name="Camila_Brow_001002_1"
              geometry={nodes.Camila_Brow_001002_1.geometry}
              material={materials["Female_Brow_Transparency.001"]}
              skeleton={nodes.Camila_Brow_001002_1.skeleton}
            />
            <skinnedMesh
              name="Camila_Brow_001002_2"
              geometry={nodes.Camila_Brow_001002_2.geometry}
              material={materials["Female_Brow_Base_Transparency.001"]}
              skeleton={nodes.Camila_Brow_001002_2.skeleton}
            />
          </group>
          <group name="CC_Base_Body_002001">
            <skinnedMesh
              name="CC_Base_Body_002002"
              geometry={nodes.CC_Base_Body_002002.geometry}
              material={materials["Std_Skin_Head.002"]}
              skeleton={nodes.CC_Base_Body_002002.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_002002_1"
              geometry={nodes.CC_Base_Body_002002_1.geometry}
              material={materials["Std_Skin_Body.002"]}
              skeleton={nodes.CC_Base_Body_002002_1.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_002002_2"
              geometry={nodes.CC_Base_Body_002002_2.geometry}
              material={materials["Std_Skin_Arm.002"]}
              skeleton={nodes.CC_Base_Body_002002_2.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_002002_3"
              geometry={nodes.CC_Base_Body_002002_3.geometry}
              material={materials["Std_Skin_Leg.002"]}
              skeleton={nodes.CC_Base_Body_002002_3.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Body_002002_4"
              geometry={nodes.CC_Base_Body_002002_4.geometry}
              material={materials["Std_Eyelash.002"]}
              skeleton={nodes.CC_Base_Body_002002_4.skeleton}
            />
          </group>
          <group name="CC_Base_Eye_003002">
            <skinnedMesh
              name="CC_Base_Eye_003002_1"
              geometry={nodes.CC_Base_Eye_003002_1.geometry}
              material={materials["Std_Eye_R.002"]}
              skeleton={nodes.CC_Base_Eye_003002_1.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Eye_003002_2"
              geometry={nodes.CC_Base_Eye_003002_2.geometry}
              material={materials["Std_Cornea_R.002"]}
              skeleton={nodes.CC_Base_Eye_003002_2.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Eye_003002_3"
              geometry={nodes.CC_Base_Eye_003002_3.geometry}
              material={materials["Std_Eye_L.002"]}
              skeleton={nodes.CC_Base_Eye_003002_3.skeleton}
            />
            <skinnedMesh
              name="CC_Base_Eye_003002_4"
              geometry={nodes.CC_Base_Eye_003002_4.geometry}
              material={materials["Std_Cornea_L.002"]}
              skeleton={nodes.CC_Base_Eye_003002_4.skeleton}
            />
          </group>
          <skinnedMesh
            name="Glove_002002"
            geometry={nodes.Glove_002002.geometry}
            material={materials["Glove.002"]}
            skeleton={nodes.Glove_002002.skeleton}
          />
          <skinnedMesh
            name="Hair_Base_001002"
            geometry={nodes.Hair_Base_001002.geometry}
            material={materials.A_Hair}
            skeleton={nodes.Hair_Base_001002.skeleton}
          />
          <skinnedMesh
            name="Knee_pad_002001"
            geometry={nodes.Knee_pad_002001.geometry}
            material={materials["Knee_pad.003"]}
            skeleton={nodes.Knee_pad_002001.skeleton}
          />
          <skinnedMesh
            name="Pants_002001"
            geometry={nodes.Pants_002001.geometry}
            material={materials["Pants.002"]}
            skeleton={nodes.Pants_002001.skeleton}
          />
          <skinnedMesh
            name="Protect_002001"
            geometry={nodes.Protect_002001.geometry}
            material={materials["Protect.002"]}
            skeleton={nodes.Protect_002001.skeleton}
          />
          <skinnedMesh
            name="Top_002001"
            geometry={nodes.Top_002001.geometry}
            material={materials["Top.001"]}
            skeleton={nodes.Top_002001.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/janet.glb");
