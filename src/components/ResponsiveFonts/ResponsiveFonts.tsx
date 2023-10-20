import styles from "./ResponsiveFonts.module.scss";

export const ResponsiveFonts = () => {
  return (
    <div className={styles.responsiveFontsContainer}>
      <div className={styles.responsiveFonts}>
        {`@mixin responsive-font(
  $min-font-size,
  $max-font-size,
  $min-screen-size,
  $max-screen-size
) {
  font-size: $min-font-size;
  @media (min-width: $min-screen-size) {
    font-size: calc(
      #{$min-font-size} + #{$max-font-size - $min-font-size} *
        ((100vw - #{$min-screen-size}) / #{$max-screen-size - $min-screen-size})
    );
  }
  @media (min-width: $max-screen-size) {
    font-size: $max-font-size;
  }
}`}
      </div>
    </div>
  );
};
