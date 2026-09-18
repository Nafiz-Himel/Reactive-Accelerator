import React from "react";

// {
//   person: {
//     name: "Lin Lanying",
//     imageID : "1bX5QH6"
//   },
//   size: 100
// }

export default function Avatar({person,size}) {
//   const { person, size } = props;
  return (
  <div>
    <div>
        <h1>{person.name}</h1>
        <p>{person.iamgeID}</p>
        <div>{size}</div>
    </div>
  </div>
);
}
