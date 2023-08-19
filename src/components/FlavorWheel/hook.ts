import React, { useLayoutEffect } from "react";

export default function useFlavorWheel() {
  const [size, setSize] = React.useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight])
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return {
    width: size[0],
    height: size[1],
  };
}