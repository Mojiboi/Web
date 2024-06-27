import React from 'react'

export default function Header(props) {
  console.log(props.Info.Type)
  return (
    <div>
       <h1>This is a Header component {props.Info.date} | {props.Info.user}</h1>

    </div>
  )
}
