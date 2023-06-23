import { useState } from "react";
import { useEffect, useRef } from "react";
import Terminal from "../Terminal";
import styles from "./style.module.css";
import { dummyText } from "../../helpers/dummyData";

const Landing = () => {
  const bodyRef = useRef();
  const [key, setKey] = useState("");
  const [showTerminal, setShowTerminal] = useState(false);
  const [enterPressed, setEnterPressed] = useState(false);
  const handleCloseTerminal = () => {
    setShowTerminal(false);
  };
  const keydownHandler = (e) => {
    setKey((prev) => {
      prev += e.key;
      if (prev === "fr") {
        setShowTerminal(true);
        return "";
      } else if (prev === "Enter") {
        setEnterPressed(true);
      }
      return prev;
    });
  };

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.focus();
    }
    document.addEventListener("keydown", keydownHandler);
    const interval = setInterval(() => {
      setKey("");
      setEnterPressed(false);
    }, 500);
    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    <div className={styles.container} ref={bodyRef}>
      {true && (
        <Terminal
          closeTerminal={handleCloseTerminal}
          enterPressed={enterPressed}
        />
      )}
    </div>
  );
};

export default Landing;
