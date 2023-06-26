import { useEffect } from "react";
import { useState } from "react";
import styles from "./style.module.css";
import { data } from "../../../helpers/dummyData";
import { icons } from "../../../helpers/assets";

const StyledResult = ({ root, command, result, currentDirectory, error }) => {
  const [hoveredListItem, setHoveredListItem] = useState(null);
  const [copied, setCopied] = useState(false);

  const rating = {
    6: "headingValueSixty",
    7: "headingValueSeventy",
    8: "headingValueEighty",
    9: "headingValueNinty",
  };

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, [1000]);
  }, [copied]);

  const handleMouseEnter = (e) => {
    setHoveredListItem(e.target.attributes?.value?.value);

    // const targetClassName = e.target.className;
    // const isHoveredListItem = targetClassName.includes(styles.hoveredListItem);
    // if (!isHoveredListItem) {
    //   console.log("e ", e.target.innerText);
    // }
  };

  const handleMouseLeave = (e) => {
    setHoveredListItem(null);
  };

  return (
    <div>
      <div className={styles.rootWrapper}>
        <span>{root}</span> <span>{currentDirectory}</span>
      </div>
      <span className={styles.command}>{command}</span>
      {result ? (
        typeof result !== "string" ? (
          <div className={styles.listWrapper}>
            {result?.map((res, index) => (
              <div
                key={index}
                className={`${styles.listItem} ${styles[data[res]?.styling]}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                value={res}
              >
                <img
                  src={icons[data[res]?.image]}
                  alt="alt"
                  width={100}
                  height={100}
                  className={styles.image}
                />
                {data[res]?.from && (
                  <span className={styles.duration}>
                    {data[res]?.from} - {data[res]?.to}
                  </span>
                )}
                {data[res]?.heading.map((head) => (
                  <p className={styles.heading}>
                    {">"}&nbsp;
                    <span>
                      {data[res]?.showHeader &&
                        Object.values(head)[0]?.image && (
                          <img
                            src={icons[Object.values(head)[0].image]}
                            width={30}
                            height={30}
                            alt="alt"
                          />
                        )}
                    </span>{" "}
                    <span
                      className={`${
                        styles[rating[Object.values(head)[0].value]]
                      }`}
                    >
                      {typeof Object.values(head)[0].value === "number" ? (
                        <>
                          {Object.keys(head)[0]}{" "}
                          {`${Object.values(head)[0].value}/10`}
                        </>
                      ) : (
                        Object.values(head)[0].value
                      )}
                    </span>
                  </p>
                ))}

                {hoveredListItem &&
                  res === hoveredListItem &&
                  data[res].showHover && (
                    <div
                      className={styles.hoveredListItem}
                      onClick={() => {
                        if (data[res]?.link) {
                          navigator.clipboard.writeText(
                            `open ${data[res]?.link}`
                          );
                        } else {
                          navigator.clipboard.writeText(
                            `cd ${hoveredListItem}`
                          );
                        }
                        setCopied(true);
                      }}
                    >
                      {data[res]?.link
                        ? `open ${data[res]?.link}`
                        : `cd ${hoveredListItem}`}
                      {copied && (
                        <span className={styles.copySuccess}>Copied</span>
                      )}
                    </div>
                  )}
              </div>
            ))}
          </div>
        ) : (
          <div>{result}</div>
        )
      ) : (
        <div> {error} </div>
      )}
    </div>
  );
};

export default StyledResult;
