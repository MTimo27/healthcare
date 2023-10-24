import { useEffect, useState } from 'react';

function useDynamicHeight() {
  const [dynamicHeight, setDynamicHeight] = useState(
    window.document.documentElement.clientHeight
  );

  useEffect(() => {
    function handleResize() {
      setDynamicHeight(
        window.document.documentElement.clientHeight
      );
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return dynamicHeight;
}

export default useDynamicHeight;
