import React from 'react'
import props from './Props';

type NewTagProps = {
    children: React.ReactNode
}
function NewTag(props: NewTagProps) {
  return (
    <div>{props.children}</div>
  )
}

export default NewTag