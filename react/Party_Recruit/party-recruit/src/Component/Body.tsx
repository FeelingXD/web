import React from 'react'
import '../Css/Body.module.scss'
type Props = {}

export default function Body({}: Props) {
  return (
    <div className='contents'>  
      <div>content1</div>
      <div>content2</div>
      <div>content3</div>
    </div>
  )
}