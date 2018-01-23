import React, { PureComponent } from "react";
import styles from "./styles.scss";

const getBackgroundColor = color => `rgb(0,${color * 100},215)`;

const getDivStyles = ({ index, maxIndex }) => {
  const length = maxIndex * 25 + 20;
  const backgroundColor = getBackgroundColor(index);

  return {
    alignItems: "center",
    border: "gray 1px solid",
    backgroundColor,
    color: "white",
    display: "flex",
    height: `${length}%`,
    justifyContent: "center",
    width: `${length}%`,
    zIndex: maxIndex + 1
  };
};

const getHeaderStyles = ({ index }) => ({
  margin: `${index * 2}.5% 0 auto 0`
});

const handleMouseDown = (index) =>  (e) => {
  e.stopPropagation()
  // eslint-disable-next-line no-alert
  alert(`You clicked div #${index}`)
}

export default class OneDiv extends PureComponent {
  render() {
    const { index, maxIndex } = this.props;

    return (
      maxIndex > 0 &&
      <div
        className={styles.outerDiv}
        onMouseDown={handleMouseDown(index)}
        style={getDivStyles(this.props)}
      >
        <span style={getHeaderStyles(this.props)}>Div {index}</span>
        <OneDiv
          className={styles.innerDiv}
          index={index + 1}
          maxIndex={maxIndex - 1}        />
      </div>
    );
  }
}
