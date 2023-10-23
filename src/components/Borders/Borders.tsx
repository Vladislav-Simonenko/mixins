import styles from "./Borders.module.scss";

export const Borders = () => {
  return (
    <div className={styles.borderContainer}>
      <pre className={styles.border}>{`@mixin border($width, $style, $color) {
  border: $width $style $color;
}`}</pre>
    </div>
  );
};
