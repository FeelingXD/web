import React from 'react'
import styles from "../Css/Header.module.scss"
type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      Header
      <div className='nav'>
        nav
        <div>
            nav in div
        </div>
      </div>

    </header>
  )
}
