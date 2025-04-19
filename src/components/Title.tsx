import React from 'react'
import styles from "./header.module.css"

function Title({title}:{title: string}) {
  return (
    <h2 className={styles.title}>{title}</h2>
  )
}

export default Title