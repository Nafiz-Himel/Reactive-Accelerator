import React from "react";
import Avatar from "./Avatar";
import Info from "./INfo";

export default function Profile(props) {

  return (
    <div>
      <Avatar {...props}/>

      <Info age = {props.age} />
    </div>
  );
}
