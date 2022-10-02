import React from 'react'
import styles from "../Css/Header.module.scss"
type Props = {}
function tologin(){
  console.log('function login test')
}
export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      Header
      <div className={styles.menu}>
        menu
          <div className={styles.profile} role='menu'>
            <a href="#" className={styles.link_login} onClick={tologin}>
              <span className="text">로그인</span>
            </a>
          </div>
          <div className={styles.menu} role='menu'>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
          </div>
          <ul>
        </ul>
      </div>
    </header>
  )
}
