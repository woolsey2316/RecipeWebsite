import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function useSticky() {
  const [isSticky, setSticky] = useState(false);
  const [isWideScreen, setWideScreen] = useState(false);

  let location = useLocation();
  const position = location.pathname === "/" ? window.innerHeight : 145;

  const handleScroll = () => {
    window.scrollY > position ? setSticky(true) : setSticky(false);
    window.scrollX > 1024 ? setWideScreen(true) : setWideScreen(false);
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
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isSticky, isWideScreen };
}

export default useSticky;
