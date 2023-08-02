import React, { useEffect } from "react";

type typeProps = {
  name: string;
  Namelength?: number ;
  isLoggedIn: boolean;
};

function props(props: typeProps) {
  return (
    <>
      {props.isLoggedIn ? (
        <div>
          Props Name is : <b>{props.name}</b> & length of props name is :<b>{props.Namelength}</b>
        </div>
      ) : (
        <div>Welcome, guest user</div>
      )}
    </>
  );
}

export default props;
