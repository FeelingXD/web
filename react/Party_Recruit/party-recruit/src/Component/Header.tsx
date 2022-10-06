import React from 'react'
import { Button, Card } from 'react-bootstrap'
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
      <Card>
        asdf
      </Card>
      <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>
    </header>
  )
}
