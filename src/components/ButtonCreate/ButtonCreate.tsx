import styles from "./ButtonCreate.module.scss";

export const ButtonCreate = () => {
  return (
    <div className={styles.buttonCreateContainer}>
      <pre
        className={styles.buttonCreate}
      >{`@mixin button($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: darken($bg-color, 10%);
  }
}`}</pre>
    </div>
  );
};
