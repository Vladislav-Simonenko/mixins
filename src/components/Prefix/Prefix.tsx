import styles from "./Prefix.module.scss";

export const Prefix = () => {
  return (
    <div className={styles.prefixContainer}>
      <div className={styles.prefix}>
        {`@mixin prefix($property, $value) {
            -webkit-#{$property}: $value;
            -moz-#{$property}: $value;
            -ms-#{$property}: $value;
            -o-#{$property}: $value;
            #{$property}: $value;}`}
      </div>
    </div>
  );
};
