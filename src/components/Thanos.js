/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: JonnyMANSON (https://sketchfab.com/JonnyMANSON)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/thanos-4k-retextured-33a76fa5ad654715acc2eef792f6832a
title: Thanos 4K Retextured
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/thanos.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="19dc4a04258445599b283320607f2e7cfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Thanos_Rig">
                  <group name="Geometry">
                    <group name="Thanos_Geo" position={[0.44, 32.63, -2.22]}>
                      <group name="HatGeo" position={[-0.44, 28.17, 1.59]} />
                      <group name="Body" position={[-0.44, -2.74, -0.03]} />
                      <group name="HeadAll" position={[-0.44, 26.65, 1.9]}>
                        <group name="Teeth_Down" position={[0, -1.04, 2.55]} />
                        <group name="Teeth_Up" position={[0, -0.63, 2.59]} />
                        <group name="Eye_BallGlass_L" position={[0.99, 1.47, 2.45]}>
                          <group name="Eye_Ball_L" />
                        </group>
                        <group name="Eye_BallGlass_R" position={[-0.99, 1.47, 2.45]}>
                          <group name="Eye_Ball_R" />
                        </group>
                        <group name="Tongue" position={[0, -0.83, 1.85]} />
                      </group>
                      <group name="Hand_L" position={[14.91, 2.12, 1.54]}>
                        <group name="polySurface1" position={[-0.01, -2.59, 3.85]} />
                        <group name="polySurface2" position={[2.95, -4.42, 4.47]} />
                        <group name="polySurface3" position={[2.65, -5.39, 4.58]} />
                        <group name="polySurface4" position={[2.2, -6.32, 4.63]} />
                        <group name="polySurface5" position={[2.58, -6.9, 3.54]} />
                        <group name="polySurface6" position={[3.17, -5.87, 3.37]} />
                        <group name="polySurface7" position={[3.4, -4.8, 3.25]} />
                        <group name="polySurface8" position={[3.51, -5.22, 1.94]} />
                        <group name="polySurface9" position={[3.18, -6.29, 2.14]} />
                        <group name="polySurface10" position={[2.62, -7.12, 2.26]} />
                        <group name="polySurface11" position={[2.52, -6.91, 1.08]} />
                        <group name="polySurface12" position={[2.96, -6.19, 0.96]} />
                        <group name="polySurface13" position={[3.19, -5.4, 0.85]} />
                        <group name="polySurface14" position={[0, 1.45, -0.13]} />
                        <group name="polySurface15" position={[2.36, -6.25, 1.97]} />
                        <group name="polySurface16" position={[2.28, -6.34, 0.87]} />
                        <group name="polySurface17" position={[2.29, -6.13, 3.15]} />
                        <group name="polySurface18" position={[2.09, -5.56, 4.33]} />
                        <group name="polySurface19" position={[0.42, -0.87, 4.28]} />
                        <group name="polySurface20" position={[0.1, -1.99, 4.45]} />
                      </group>
                      <group name="Stone" position={[17.12, -0.17, 4]}>
                        <group name="Stone_Orange" position={[1.69, -1.7, -2.38]} />
                        <group name="Stone_Red" position={[2.21, -1.35, -1.02]} />
                        <group name="Stone_Blue" position={[2.25, -0.91, 0.4]} />
                        <group name="Stone_Purple" position={[1.7, -0.37, 1.77]} />
                        <group name="Stone_Green" position={[-1.98, 1.64, 2.27]} />
                        <group name="Stone_Yellow" position={[2.05, 0.9, -1.03]} />
                      </group>
                      <group name="Hand_R" position={[-16.33, 2.79, 0.44]} />
                      <group name="Pant" position={[-0.44, -0.02, 0.78]} />
                      <group name="Head_Real" position={[-0.44, 26.65, 1.9]} />
                    </group>
                  </group>
                  <group name="DeformationSystem" position={[1, 0, 0]}>
                    <group name="Object_49">
                      <primitive object={nodes._rootJoint} />
                      <group name="Object_51" position={[0, 60.8, -0.63]} />
                      <group name="Object_53" position={[0, 29.89, -2.25]} />
                      <group name="Object_55" position={[0, 58.24, 2.23]} />
                      <group name="Object_57" position={[0, 58.65, 2.27]} />
                      <group name="Object_59" position={[0.99, 60.75, 2.13]} />
                      <group name="Object_61" position={[0.99, 60.75, 2.13]} />
                      <group name="Object_63" position={[-0.99, 60.75, 2.13]} />
                      <group name="Object_65" position={[-0.99, 60.75, 2.13]} />
                      <group name="Object_67" position={[0, 58.45, 1.54]} />
                      <group name="Object_69" position={[15.35, 32.16, 3.17]} />
                      <group name="Object_71" position={[18.31, 30.33, 3.79]} />
                      <group name="Object_73" position={[18, 29.36, 3.9]} />
                      <group name="Object_75" position={[17.56, 28.42, 3.94]} />
                      <group name="Object_77" position={[17.93, 27.85, 2.86]} />
                      <group name="Object_79" position={[18.52, 28.88, 2.69]} />
                      <group name="Object_81" position={[18.76, 29.95, 2.57]} />
                      <group name="Object_83" position={[18.86, 29.52, 1.26]} />
                      <group name="Object_85" position={[18.54, 28.46, 1.46]} />
                      <group name="Object_87" position={[17.97, 27.63, 1.58]} />
                      <group name="Object_89" position={[17.88, 27.84, 0.4]} />
                      <group name="Object_91" position={[18.32, 28.56, 0.28]} />
                      <group name="Object_93" position={[18.55, 29.35, 0.17]} />
                      <group name="Object_95" position={[15.36, 36.2, -0.81]} />
                      <group name="Object_97" position={[17.72, 28.5, 1.29]} />
                      <group name="Object_99" position={[17.64, 28.41, 0.19]} />
                      <group name="Object_101" position={[17.64, 28.62, 2.47]} />
                      <group name="Object_103" position={[17.45, 29.19, 3.65]} />
                      <group name="Object_105" position={[15.77, 33.88, 3.6]} />
                      <group name="Object_107" position={[15.45, 32.76, 3.77]} />
                      <group name="Object_109" position={[19.25, 30.75, -0.6]} />
                      <group name="Object_111" position={[19.77, 31.1, 0.76]} />
                      <group name="Object_113" position={[19.81, 31.54, 2.18]} />
                      <group name="Object_115" position={[19.26, 32.08, 3.55]} />
                      <group name="Object_117" position={[15.58, 34.1, 4.05]} />
                      <group name="Object_119" position={[19.61, 33.35, 0.75]} />
                      <group name="Object_121" position={[-15.89, 35.42, -1.78]} />
                      <group name="Object_123" position={[0, 32.6, -1.44]} />
                      <group name="Object_125" position={[0, 59.28, -0.32]} />
                      <skinnedMesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.M_Lrg_Jim_Helmet} skeleton={nodes.Object_52.skeleton} />
                      <skinnedMesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.M_Lrg_Jim_Body} skeleton={nodes.Object_54.skeleton} />
                      <skinnedMesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.M_Lrg_Jim_Head} skeleton={nodes.Object_56.skeleton} />
                      <skinnedMesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.M_Lrg_Jim_Head} skeleton={nodes.Object_58.skeleton} />
                      <skinnedMesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.M_Lrg_Jim_Head} skeleton={nodes.Object_60.skeleton} />
                      <skinnedMesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.EyeBall} skeleton={nodes.Object_62.skeleton} />
                      <skinnedMesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.M_Lrg_Jim_Head} skeleton={nodes.Object_64.skeleton} />
                      <skinnedMesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.EyeBall} skeleton={nodes.Object_66.skeleton} />
                      <skinnedMesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.M_Lrg_Jim_Head} skeleton={nodes.Object_68.skeleton} />
                      <skinnedMesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_70.skeleton} />
                      <skinnedMesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_72.skeleton} />
                      <skinnedMesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_74.skeleton} />
                      <skinnedMesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_76.skeleton} />
                      <skinnedMesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_78.skeleton} />
                      <skinnedMesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_80.skeleton} />
                      <skinnedMesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_82.skeleton} />
                      <skinnedMesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_84.skeleton} />
                      <skinnedMesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_86.skeleton} />
                      <skinnedMesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_88.skeleton} />
                      <skinnedMesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_90.skeleton} />
                      <skinnedMesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_92.skeleton} />
                      <skinnedMesh name="Object_94" geometry={nodes.Object_94.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_94.skeleton} />
                      <skinnedMesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_96.skeleton} />
                      <skinnedMesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_98.skeleton} />
                      <skinnedMesh name="Object_100" geometry={nodes.Object_100.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_100.skeleton} />
                      <skinnedMesh name="Object_102" geometry={nodes.Object_102.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_102.skeleton} />
                      <skinnedMesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_104.skeleton} />
                      <skinnedMesh name="Object_106" geometry={nodes.Object_106.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_106.skeleton} />
                      <skinnedMesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_108.skeleton} />
                      <skinnedMesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_110.skeleton} />
                      <skinnedMesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_112.skeleton} />
                      <skinnedMesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_114.skeleton} />
                      <skinnedMesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_116.skeleton} />
                      <skinnedMesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_118.skeleton} />
                      <skinnedMesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.M_LRG_JIM_Gauntlet} skeleton={nodes.Object_120.skeleton} />
                      <skinnedMesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials.M_Lrg_Jim_Body} skeleton={nodes.Object_122.skeleton} />
                      <skinnedMesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials.M_Lrg_Jim_Body} skeleton={nodes.Object_124.skeleton} />
                      <skinnedMesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.M_Lrg_Jim_Head} skeleton={nodes.Object_126.skeleton} />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/thanos.gltf')
