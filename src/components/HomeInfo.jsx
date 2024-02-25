import { Canvas } from "@react-three/fiber";

import React, { Suspense } from "react";
import Earth from "../../public/Earth";
import { Link } from "react-router-dom";
import { Environment, OrbitControls } from "@react-three/drei";

const HomeInfo = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="max-w-sm rounded-lg shadow-2xl">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={1.5} />
            <OrbitControls enableZoom={true} />
            <Suspense fallback={null}>
              <Earth />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>

        <div>
          <h2 className="py-4 text-2xl text-primary">Hello I'm</h2>
          <h1 className="text-5xl font-bold">
            <span className="bg-slate-200 rounded-md">&nbsp;Juan </span> Jose
            Vanegas Maya
          </h1>
          <p className="py-6">I'm a full stack developer based in Canada 🍁</p>
          <Link to="/about" className="btn btn-primary">
            Check experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
