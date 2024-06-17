import { useEffect, useState } from "react";
import Moon from "../assets/icon-moon.svg";
import Sun from "../assets/icon-sun.svg";

function ModeButton() {
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="cursor-pointer text-light-gray dark:text-dark-white uppercase"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      <button className="flex items-center gap-4 uppercase text-sm tracking-widest">
        {darkMode ? (
          <>
            light
            <img src={Sun} alt="sun" />
          </>
        ) : (
          <>
            dark
            <img src={Moon} alt="moon" />
          </>
        )}
      </button>
    </div>
  );
}

export default ModeButton;
