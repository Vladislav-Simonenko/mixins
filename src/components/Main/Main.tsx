import {
  Alignment,
  Animations,
  Borders,
  ExpandableContainer,
  Flexbox,
  Gradient,
  Gridbox,
  Prefix,
  ResponsiveFonts,
  Shadows,
  TextShadows,
} from "..";
import styles from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={styles.main}>
      <ExpandableContainer text={"Prefix"}>
        <Prefix />
      </ExpandableContainer>

      <ExpandableContainer text={"Gradient"}>
        <Gradient />
      </ExpandableContainer>

      <ExpandableContainer text={"Animations"}>
        <Animations />
      </ExpandableContainer>

      <ExpandableContainer text={"Shadows"}>
        <Shadows />
      </ExpandableContainer>

      <ExpandableContainer text={"ResponsiveFonts"}>
        <ResponsiveFonts />
      </ExpandableContainer>

      <ExpandableContainer text={"Borders"}>
        <Borders />
      </ExpandableContainer>

      <ExpandableContainer text={"TextShadows"}>
        <TextShadows />
      </ExpandableContainer>

      <ExpandableContainer text={"Flexbox"}>
        <Flexbox />
      </ExpandableContainer>

      <ExpandableContainer text={"Gridbox"}>
        <Gridbox />
      </ExpandableContainer>

      <ExpandableContainer text={"Alignment"}>
        <Alignment />
      </ExpandableContainer>
    </div>
  );
};
