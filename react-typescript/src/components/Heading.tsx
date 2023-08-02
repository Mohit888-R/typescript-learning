import React from 'react'

type Headingprops = {
    children : string
}

function Heading(props : Headingprops) {
  return (
    <div>{props.children}</div>
  )
}

export default Heading