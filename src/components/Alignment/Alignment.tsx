import styles from "./Alignment.module.scss";

export const Alignment = () => {
  return (
    <div className={styles.alignmentContainer}>
      <div className={styles.alignment}> @include center;</div>
    </div>
  );
};
