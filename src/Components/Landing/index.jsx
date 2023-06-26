import { useState } from "react";
import { useEffect, useRef } from "react";
import Terminal from "../Terminal";
import styles from "./style.module.css";

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
        setTimeout(() => {
          setShowTerminal(true);
        }, 0);
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
      {showTerminal ? (
        <Terminal
          closeTerminal={handleCloseTerminal}
          enterPressed={enterPressed}
        />
      ) : (
        <div className={styles.intro}>
          <p>Welcome to my terminal-based portfolio website!</p>
          <p>
            As you explore this unique interface inspired by a command-line
            terminal, you'll find a curated collection of my skills, projects,
            and experiences as a developer. Just like navigating through a
            digital terminal, you can use commands to access different sections
            and discover more about my work.
          </p>
          <p>
            Type "help" or "commands" to view a list of available commands and
            their functionalities. From there, you can navigate to sections like
            "About," "Projects," "Skills," and "Contact" to learn more about my
            background, explore my featured projects, delve into my technical
            expertise, and get in touch with me.
          </p>
          <p>
            I've designed this terminal theme to provide a familiar and engaging
            experience for developers, tech enthusiasts, and anyone interested
            in learning about my professional journey. Feel free to explore,
            type commands, and interact with the different sections to get a
            comprehensive overview of my skills, experiences, and achievements.
          </p>
          <p>
            Thank you for visiting my portfolio website, and I hope you enjoy
            your time exploring my work through this unique terminal interface.
          </p>

          <p>
            To open the terminal <span>type fr</span> or{" "}
            <button
              className={styles.openTerminalBtn}
              onClick={() => setShowTerminal(true)}
            >
              click here
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Landing;
