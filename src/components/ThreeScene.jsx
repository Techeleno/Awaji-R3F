import { Environment, useEnvironment } from '@react-three/drei';
import React from 'react'; 


const ThreeScene = () => {
    const envMap = useEnvironment({ files: "/assets/environmentMap.hdr"})
  
    return (
      <>
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} />
      <Environment map = {envMap} background/>
      </>
    )
};

export default ThreeScene;