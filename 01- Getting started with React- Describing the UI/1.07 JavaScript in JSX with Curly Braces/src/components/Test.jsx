const style1 = {
    background: "red"
}

const style2 = {
    background : "green"
}

const color = "green"

export default function Test() {
    return (
      <ul style={
        color === "green" ? style1 : style2
      }>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
  );
}
