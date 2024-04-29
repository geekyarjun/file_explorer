import { useEffect } from "react";

const useClick = (target: string, cb: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const element = document.getElementById(target);

      if (!(e?.target && element && element.contains(e?.target as Node))) {
        cb();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [target, cb]);

  return null;
};

export default useClick;
