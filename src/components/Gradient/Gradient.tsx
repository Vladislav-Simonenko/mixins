import styles from "./Gradient.module.scss";

export const Gradient = () => {
  return (
    <div className={styles.gradientContainer}>
      <pre className={styles.gradient}>{`@mixin gradient($colors...) {
        background: linear-gradient(145deg, $colors);
      }`}</pre>
    </div>
  );
};
