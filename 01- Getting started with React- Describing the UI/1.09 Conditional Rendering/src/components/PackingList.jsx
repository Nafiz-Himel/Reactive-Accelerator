function Item({ name, isPacked }) {
  //   if (isPacked) {
  //     return <li className="item">{name} ✅</li>
  //   }

  //     return <li className="item">{name}</li>

//   return <li className="item">{name} {isPacked && "✅"}</li>;

    let itemContent = ""

    if(isPacked){
        itemContent = name + "✅"
    }
    else {
        itemContent = name
    }

    return <li className="item">{itemContent}</li>

}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}


// just for memory
// const lang = "JavaScript1"
// const result1 = lang && "JavaScript" //jodi left side truthy hoy rightside return korbe otherwise left side return krbe
// const result2 = lang || "JavaScript" //jodi left side falsy(blank,null,undefined,blank string,zero,false,nan) hoy rightside return korbe otherwise left side return krbe
// const result3 = lang ?? "JavaScript" //(nullish coalescing operator)jodi left side nullish(null or undefined) hoy rightside return korbe otherwise left side return krbe

// console.log(result1) //JavaScript
// console.log(result2) //JavaScript1
// console.log(result3) //JavaScript1

