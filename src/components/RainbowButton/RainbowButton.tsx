import styles from "./RainbowButton.module.scss";

interface IRainbowButtonProps {
  text: string;
  onClick: () => void;
}

export const RainbowButton = (props: IRainbowButtonProps) => {
  const { text, onClick } = props;
  return (
    <button className={styles.rainbowButton} onClick={onClick}>
      {text}
    </button>
  );
};
