import styles from "./Animations.module.scss";

export const Animations = () => {
  return (
    <div className={styles.animarionsContainer}>
      <pre className={styles.animations}>
        {`
@mixin animation($name, $duration, $timing-function, $delay, $iteration-count) {
  animation: $name $duration $timing-function $delay $iteration-count;
}`}
      </pre>
    </div>
  );
};
