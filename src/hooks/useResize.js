import { useEffect, useState } from "react";

function useResize() {
  const [isWideScreen, setWideScreen] = useState(false);

  const minWidth = 1024;

  const handleResize = () => {
    window.innerWidth > minWidth ? setWideScreen(true) : setWideScreen(false);
  };

  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  useEffect(() => {
    window.addEventListener("resize", debounce(handleResize));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [debounce, handleResize]);

  return { isWideScreen };
}

export default useResize;
