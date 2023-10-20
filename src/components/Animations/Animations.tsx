import styles from "./Animations.module.scss";

export const Animations = () => {
  return (
    <div className={styles.animarionsContainer}>
      <div className={styles.animations}>
        {`@mixin animation($name, $duration, $timing-function, $delay, $iteration-count) {
  animation: $name $duration $timing-function $delay $iteration-count;
}`}
      </div>
    </div>
  );
};
