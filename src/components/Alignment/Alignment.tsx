import styles from "./Alignment.module.scss";

export const Alignment = () => {
  return (
    <div className={styles.alignmentContainer}>
      <pre className={styles.alignment}>{`@mixin format-text(
  $font-family,
  $font-size,
  $font-weight,
  $text-color,
  $line-height,
  $text-align
) {
  font-family: $font-family;
  font-size: $font-size;
  font-weight: $font-weight;
  color: $text-color;
  line-height: $line-height;
  text-align: $text-align;
}
`}</pre>
    </div>
  );
};
