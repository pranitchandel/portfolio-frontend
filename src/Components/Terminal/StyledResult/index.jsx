import styles from "./style.module.css";

const StyledResult = ({ root, command, result, currentDirectory, error }) => {
  return (
    <div>
      <div className={styles.rootWrapper}>
        <span>{root}</span> <span>{currentDirectory}</span>
      </div>
      <span className={styles.command}>{command}</span>
      {result ? (
        <div className={styles.listWrapper}>
          {result?.map((res, index) => (
            <div key={index} className={styles.listItem}>
              {res}
            </div>
          ))}
        </div>
      ) : (
        <div> {error} </div>
      )}
    </div>
  );
};

export default StyledResult;
