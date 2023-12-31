import styles from "./Shadows.module.scss";

export const Shadows = () => {
  return (
    <div className={styles.shadowsContainer}>
      <pre className={styles.shadows}>
        {`@mixin box-shadow($x, $y, $blur, $spread, $color) {
  box-shadow: $x $y $blur $spread $color;
}`}
      </pre>
    </div>
  );
};
