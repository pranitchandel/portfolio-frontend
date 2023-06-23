import { useRef, useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import styles from "./style.module.css";
import StyledResult from "./StyledResult";
import { directories } from "../../helpers/dummyData";

const Terminal = ({ closeTerminal, enterPressed }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [terminalData, setTerminalData] = useState([]);
  const [command, setCommand] = useState("");
  const [currentDirectory, setCurrentDirectory] = useState("");
  const [pwd, setPwd] = useState("");
  const inputRef = useRef(null);

  const validCommands = ["", "ls", "cd", "pwd", "clear"];

  const root = "pranitkumarchandel@Pranits-MacBook-Air";

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.scrollIntoView({ behaviour: "smooth" });
  });

  useEffect(() => {
    if (enterPressed) {
      let finalResult, finalError;
      const currentCommand = command.split(" ");
      const operation = currentCommand[0];
      const operand = currentCommand[1];
      if (!validCommands.includes(operation)) {
        finalError = `command not found : ${operation}`;
      } else {
        let { result, error } = checkCommandOperands(operation, operand);
        finalResult = result;
        finalError = error;
      }
      if (finalResult === "clearTerminal") {
        setTerminalData([]);
        setCommand("");
        return;
      } else
        setTerminalData((prev) => {
          return [
            ...prev,
            <StyledResult
              root={root}
              command={command}
              result={finalResult}
              currentDirectory={currentDirectory}
              error={finalError}
            />,
          ];
        });
      setCommand("");
    }

    return () => {};
  }, [enterPressed]);

  //Always return array
  const getAllKeys = (arr) => {
    let temp = [];
    console.log("Ar ", arr);
    if (typeof arr === "string") {
      return [arr];
    }
    for (let a of arr) {
      if (typeof a === "string") {
        temp.push(a);
      } else temp.push(Object.keys(a)[0]);
    }
    return temp;
  };

  const getCurrentDirectory = () => {
    let currentDirectoryList = pwd.split("/");
    let tempDirectories = [...directories.root];
    const keys = getAllKeys(tempDirectories);
    if (currentDirectoryList.length === 1) return keys;
    for (let curr of currentDirectoryList) {
      if (curr === "") {
        continue;
      }
      const temp = tempDirectories.find(
        (temp) => Object.keys(temp)[0] === curr
      );
      console.log("Temp ", temp);
      tempDirectories = temp?.[curr];
    }
    return getAllKeys(tempDirectories);
  };

  const checkCommandOperands = (operation, operand) => {
    if (operation === "ls") {
      const currentDirectoryList = getCurrentDirectory();
      return {
        result: currentDirectoryList,
        error: undefined,
      };
    }
    if (operation === "cd") {
      const currentDirectoryList = getCurrentDirectory(pwd);
      if (currentDirectoryList.includes(operand)) {
        setPwd((prev) => `${prev}/${operand}`);
        setCurrentDirectory(operand);
        return {
          result: undefined,
          error: undefined,
        };
      } else if (operand === "..") {
        const pwdList = pwd.split("/");
        pwdList.splice(pwdList.length - 1, 1);
        setPwd(pwdList.join("/"));
        setCurrentDirectory(pwdList[pwdList.length - 1]);
        return {
          result: undefined,
          error: undefined,
        };
      } else {
        return {
          result: undefined,
          error: `${operation}: no such file or directory: ${operand}`,
        };
      }
    }

    if (operation === "pwd") {
      return {
        result: [pwd],
        error: undefined,
      };
    }

    if (operation === "clear") {
      return {
        result: "clearTerminal",
        error: undefined,
      };
    } else
      return {
        result: undefined,
        error: undefined,
      };
  };

  const handleCommandChange = (e) => {
    setCommand(e.target.value);
  };

  return (
    <div
      className={`${styles.container} ${
        isFullScreen ? styles.fullScreen : styles.smallScreen
      }`}
    >
      <div className={styles.topbar}>
        <button onClick={closeTerminal}>close</button>
        <button onClick={() => setIsFullScreen(false)}>minimize</button>
        <button onClick={() => setIsFullScreen(true)}>maximize</button>
      </div>
      <div className={styles.terminalBody}>
        {terminalData?.length > 0 &&
          terminalData.map((data, index) => (
            <div className={styles.terminalData} key={index}>
              {data}
            </div>
          ))}

        <div className={styles.animation}>
          <p className={`${styles.text} ${styles.text1}`}>
            Welcome to the portfolio of
          </p>
          <p className={`${styles.text} ${styles.text2}`}>
            Pranit Kumar Chandel,
          </p>
          <p className={`${styles.text} ${styles.text3}`}>
            a skilled{" "}
            <span className={styles.domain}>Full stack web Developer</span>
          </p>
          <p className={`${styles.text} ${styles.text4}`}>
            with <span className={styles.experience}>2.5 years</span> of
            experience.
          </p>
          <p className={`${styles.text} ${styles.text5}`}>
            Let's build something amazing together!{" "}
          </p>
        </div>
        <div className={styles.newCommand}>
          <span className={styles.root}>
            {root} {currentDirectory}
          </span>
          <input
            autoComplete="off"
            ref={inputRef}
            type="text"
            name="command"
            value={command}
            onChange={handleCommandChange}
            className={styles.commandInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
