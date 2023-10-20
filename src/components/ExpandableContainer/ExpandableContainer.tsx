import React, { useState } from "react";
import styles from "./ExpandableContainer.module.scss";
import { RainbowButton } from "..";

interface IExpandableContainerProps {
  children: React.ReactNode;
  text: string;
}

export function ExpandableContainer(props: IExpandableContainerProps) {
  const { children, text } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.ExpandableContainer}>
      <RainbowButton text={text} onClick={toggleExpand}></RainbowButton>
      {isExpanded && (
        <div className={styles.ExpandableContainerContent}>{children}</div>
      )}
    </div>
  );
}
