import styles from "./Prefix.module.scss";

export const Prefix = () => {
  return (
    <div className={styles.prefixContainer}>
      <pre className={styles.prefix}>
        {`@mixin prefix($property, $value) {
            -webkit-#{$property}: $value;
            -moz-#{$property}: $value;
            -ms-#{$property}: $value;
            -o-#{$property}: $value;
            #{$property}: $value;
            }`}
      </pre>
    </div>
  );
};
