// Game
//  -> Board
//       -> Square
//  -> History

function Square({value}){
  return <button className="bg-white border border-grey-400 h-12 w-12 m-1 leading-9 text-lg">
          {value}
        </button>
}

export default function Board() {
  return (
    <>
    <div className="flex">
      <Square />
      <Square />
      <Square />
    </div>
    <div className="flex">
      <Square value = "X"/>
      <Square />
      <Square />
    </div>
    <div className="flex">
      <Square />
      <Square />
      <Square />
    </div>
    </>
  );
}
