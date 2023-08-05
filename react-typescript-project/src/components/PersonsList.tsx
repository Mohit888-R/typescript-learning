import React from "react";

type PersonNameList = {
    names : {
        first : string,
        last : string
    }[]
}

function PersonsList(props: PersonNameList) {
  return (
    <>
      <div>
        {props.names.map((items)=>(
            <h2 key={items.first}>
                {items.first} {items.last}
                </h2>
        ))}
      </div>
    </>
  );
}

export default PersonsList;
