import React from 'react'
import styles from './styles.scss'
import OneDiv from '../OneDiv'

export default function ThreeDivs () {
  return (
    <div className={styles.container}>
      <OneDiv
        index={3}
      />
    </div>
  )
}
