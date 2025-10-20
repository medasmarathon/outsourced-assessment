import { useEffect, type RefObject } from "react";

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  refs: RefObject<T | null> | RefObject<T | null>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!enabled) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const refsArray = Array.isArray(refs) ? refs : [refs];

      const isOutside = refsArray.every((ref) => {
        return !ref.current || !ref.current.contains(event.target as Node);
      });

      if (isOutside) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler, enabled]);
};
