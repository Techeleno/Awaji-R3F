import { useThree } from '@react-three/fiber';
import { useEffect} from 'react';
import gsap from 'gsap';


// CameraController component to handle camera animations
const CameraController = ({ cameraPosition, targetPosition, orbitControlsRef, cameraRef, showBox}) => {
  const { camera } = useThree();

  useEffect(() => {
    // Store the camera in the ref for access outside of Canvas
    cameraRef.current = camera;

    if (cameraPosition && targetPosition) {
      // GSAP animation for smooth camera position transition
      gsap.to(camera.position, {
        duration: 2,
        x: cameraPosition.x,
        y: cameraPosition.y,
        z: cameraPosition.z,
        ease: 'power3.inOut',
      });

      // GSAP animation for the OrbitControls target
      gsap.to(orbitControlsRef.current.target, {
        duration: 2,
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        ease: 'power3.inOut',
        onUpdate: () => {
          orbitControlsRef.current.update(); // Update controls to reflect new target
        },
        onComplete: () => {
          showBox();
        }
      });
    }
  }, [cameraPosition, targetPosition, camera, orbitControlsRef]);

  return null;
};

export default CameraController;