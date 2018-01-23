import React, { PureComponent } from 'react'
import styles from './styles.scss'

const getBackgroundColor = (color) => `rgb(${color*10},${color*100},${color*25})`

const getStyles = ({ index, maxIndex }) => {
  const length = ((index * 25)+10)
  const backgroundColor = getBackgroundColor(index)

  return {
    "align-items": "center",
    "border": "gray 1px solid",
    backgroundColor,
    "color": "white",
    "display": "flex",
    "height": `${length}%`,
    "justify-content": "center",
    "position": "absolute",
    "width" : `${length}%`,
    "zIndex": index + 1,
  }
}


export default class OneDiv extends PureComponent {

  handleClick = () => {
    console.log('clicked div', this.props.index)
  }

  render() {
    const { index, maxIndex} = this.props
    return index > 0  && (
      <div
        className={styles.outerDiv}
        onClick={this.handleClick.bind(this)}
        style={getStyles(this.props)}>
        Div { index }
        <OneDiv
          className={styles.innerDiv}
          index={index - 1}
          maxIndex={maxIndex- 1}
        />
      </div>
    )
  }
}
