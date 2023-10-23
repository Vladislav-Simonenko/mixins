import styles from "./TextShadows.module.scss";

export const TextShadows = () => {
  return (
    <div className={styles.textShadowsContainer}>
      <pre className={styles.textShadows}>
        {`@mixin text-shadow($x, $y, $blur, $color) {
  text-shadow: $x $y $blur $color;
}`}
      </pre>
    </div>
  );
};
