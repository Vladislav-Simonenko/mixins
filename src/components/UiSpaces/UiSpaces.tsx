import React from "react";
import styles from "./UiSpaces.module.scss";

export const UiSpaces = () => {
  return (
    <div className={styles.uiSpacesContainer}>
      <pre className={styles.uiSpaces}>
        {`$ui-step: 1rem;

@mixin ui-space($direction, $size) {
  @if unitless($size) {
    @warn "Please provide a unit for the size argument. Using 'rem' as the default unit.";
    $size: $size * 1rem;
  }

  @if $direction == top {
    margin-top: $size;
  } @else if $direction == bottom {
    margin-bottom: $size;
  } @else if $direction == left {
    margin-left: $size;
  } @else if $direction == right {
    margin-right: $size;
  } @else {
    @warn "Invalid direction provided. Use 'top', 'bottom', 'left', or 'right'.";
  }
}`}
      </pre>
    </div>
  );
};
