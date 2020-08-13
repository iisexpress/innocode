import React from 'react'
import style from './style.css'

const Container = (props: any) => (
  <div className={style.container}>{props.children}</div>
)

export default Container
