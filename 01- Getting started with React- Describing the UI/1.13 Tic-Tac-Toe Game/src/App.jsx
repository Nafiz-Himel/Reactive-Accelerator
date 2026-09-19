// Game
//  -> Board
//       -> Square
//  -> History
import {useSate} from "react"


function Square() {
  const [value, setvalue] = useState(null)

  funciton handleClick(){
    console.log("Clicked!")
    setvalue("X")
  }

  return (
    <button 
      className="bg-white border border-grey-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
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
        <Square value="X" />
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
