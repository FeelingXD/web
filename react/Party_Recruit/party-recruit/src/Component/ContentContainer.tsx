import React, { Component } from 'react'
type Props = {}

type State = {}

export default class ContentContainer extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className='Container'>
        <div className='Container_img'/>
        <div className='Container_title'></div>
        <div className='Container_desc'></div>
      </div>
    )
  }
}