import React from 'react'
import props from './Props';

type StatusProps = {
    status : "loading" | "success" | "error"
}


function Stats(props: StatusProps) {

  let status;
  if( props.status === 'loading') status = 'loading...';
  else if( props.status === 'success') status = 'Data is fetching!!! ';
  else status = 'error'
  return (
    <div>Status - {status}</div>
  )
}

export default Stats