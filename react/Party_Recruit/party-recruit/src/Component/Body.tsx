import React from 'react'
import style from '../Css/Body.module.scss'
import Container from './ContentContainer'
type Props = {}

export default function Body({}: Props) {
  return (
    <div className={style.contents}>  
      <Container/>
    </div>
  )
}