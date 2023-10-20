import styles from "./Gradient.module.scss";

export const Gradient = () => {
  return (
    <div className={styles.gradientContainer}>
      <div
        className={styles.gradient}
      >{`@mixin gradient($colors...) { background: linear-gradient(145deg, $colors);}`}</div>
    </div>
  );
};
