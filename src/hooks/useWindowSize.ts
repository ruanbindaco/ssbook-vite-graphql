import { useState, useEffect } from "react";
const BREAKPOINTS = {
  mobile: 768,
};
export function useWindowSize() {
  const [currentWindowType, setCurrentWindowType] = useState<
   "mobile" | "desktop"
  >();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= BREAKPOINTS.mobile) {
        setCurrentWindowType("mobile");
      } else {
        setCurrentWindowType("desktop");
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return currentWindowType;
}
