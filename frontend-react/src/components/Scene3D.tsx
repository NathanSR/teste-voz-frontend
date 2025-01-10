import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export const Mustang = () => {
    const mustangRef = useRef();
    const { scene } = useGLTF("/models/mustang.glb");

    // Animação: o carro "corre" e sai da tela
    useFrame(({ clock }) => {
        if (mustangRef.current) {
            const elapsedTime = clock.getElapsedTime();
            mustangRef.current.position.x = Math.sin(elapsedTime) * 5; // Movimento horizontal
            mustangRef.current.position.z -= 0.05; // Corre para frente
        }
    });

    return <primitive object={scene} ref={mustangRef} scale={0.5} />;
};

export const Scene3D = () => {
    return (
        <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Mustang />
            <OrbitControls />
        </Canvas>
    );
};

