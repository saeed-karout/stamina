import { useEffect, useRef } from "react";

const useClickOutside = (handler: () => void) => {
  const domNode = useRef(null);
  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      // @ts-expect-error reason
      if (!domNode?.current?.contains(event.target)) handler();
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

export default useClickOutside;
