import styles from "./Flexbox.module.scss";

export const Flexbox = () => {
  return (
    <div className={styles.flexboxContainer}>
      <div className={styles.flexbox}>
        {`@mixin flex-container($direction: row, $justify: center, $align: center) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}`}
        <div className={styles.flexboxItem}>{`
        @mixin flex-item($flex: 1) {
          flex: $flex;
        }`}</div>
      </div>
    </div>
  );
};
