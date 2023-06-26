import { useRef, useState } from "react";
import { useEffect } from "react";
import styles from "./style.module.css";
import StyledResult from "./StyledResult";
import { directories } from "../../helpers/dummyData";
import { icons } from "../../helpers/assets";

const Terminal = ({ closeTerminal, enterPressed }) => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [terminalData, setTerminalData] = useState([]);
  const [command, setCommand] = useState("");
  const [currentDirectory, setCurrentDirectory] = useState("");
  const [pwd, setPwd] = useState("");
  const inputRef = useRef(null);

  const validCommands = ["", "ls", "cd", "pwd", "open", "help", "clear"];

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

      if (finalResult === "open") {
        console.log("Operand ", operand);
        const newWindow = window.open(operand, "_blank", "noopener,noreferrer");
        if (newWindow) newWindow.opener = null;
        setCommand("");
        return;
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
    // eslint-disable-next-line
  }, [enterPressed]);

  //Always return array
  // const getAllKeys = (arr) => {
  //   let temp = [];
  //   if (typeof arr === "string") {
  //     return [arr];
  //   }
  //   for (let a of arr) {
  //     if (typeof a === "string") {
  //       temp.push(a);
  //     } else temp.push(Object.keys(a)[0]);
  //   }
  //   return temp;
  // };

  // const getCurrentDirectory = () => {
  //   let currentDirectoryList = pwd.split("/");
  //   let tempDirectories = [...directories.root];
  //   const keys = getAllKeys(tempDirectories);
  //   if (currentDirectoryList.length === 1) return keys;
  //   for (let curr of currentDirectoryList) {
  //     if (curr === "") {
  //       continue;
  //     }
  //     const temp = tempDirectories.find(
  //       (temp) => Object.keys(temp)[0] === curr
  //     );
  //     tempDirectories = temp?.[curr];
  //   }
  //   return getAllKeys(tempDirectories);
  // };

  const getCurrentDirectory = () => {
    const currentDirectoryList = pwd.split("/");

    if (currentDirectoryList.length === 1) return [...directories.root];

    const currentDirectory =
      currentDirectoryList[currentDirectoryList.length - 1];
    return directories[currentDirectory];
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
      const currentDirectoryList = getCurrentDirectory();
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
        result: pwd || "/",
        error: undefined,
      };
    }

    if (operation === "open") {
      return {
        result: "open",
        error: undefined,
      };
    }

    if (operation === "help") {
      return {
        result: directories.Help,
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
        <button onClick={closeTerminal} className={styles.topbarBtn}>
          <img src={icons.close} alt="" width={15} height={15} />
        </button>
        <button
          onClick={() => setIsFullScreen(false)}
          className={styles.topbarBtn}
        >
          <img src={icons.minimize} width={15} height={15} alt="alt" />
        </button>
        <button
          onClick={() => setIsFullScreen(true)}
          className={styles.topbarBtn}
        >
          <img src={icons.maximize} width={15} height={15} alt="alt" />
        </button>
      </div>
      <div className={styles.terminalBody}>
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
          {/* <p className={`${styles.text} ${styles.text4}`}>
            with <span className={styles.experience}>2.5 years</span> of
            experience.
          </p> */}
          <p className={`${styles.text} ${styles.text4}`}>
            Let's build something amazing together!
          </p>
        </div>
        {terminalData?.length > 0 &&
          terminalData.map((data, index) => (
            <div className={styles.terminalData} key={index}>
              {data}
            </div>
          ))}

        <div className={styles.root}>
          <span className={styles.rootText}>{root}</span>
          <span className={styles.currentDirectory}>{currentDirectory}</span>
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
