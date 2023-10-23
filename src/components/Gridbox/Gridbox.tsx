import styles from "./Gridbox.module.scss";

export const Gridbox = () => {
  return (
    <div className={styles.gridboxContainer}>
      <pre className={styles.gridbox}>
        {`@mixin grid-container(
  $columns: 3,
  $rows: 3,
  $content,
  $item,
  $alignItem,
  $justifyItem,
  $gap: 20px
) {
  display: grid;
  justify-content: $content;
  align-content: $item;
  align-items: $alignItem;
  justify-items: $justifyItem;
  grid-template-rows: repeat($rows, 1fr);
  grid-template-columns: repeat($columns, 1fr);
  gap: $gap;
}`}
        <pre
          className={styles.gridboxItem}
        >{`@mixin grid-item($row: auto, $col: auto) {
  grid-row: $row;
  grid-column: $col;
}`}</pre>
      </pre>
    </div>
  );
};
