import blackPawn from "./blackpawn.svg";
import whitePawn from "./white-pawn.svg";
import whiteRook from "./white-rook.svg";
import blackRook from "./black-rook.svg";
import whiteKnight from "./white-knight.svg";
import blackKnight from "./black-knight.svg";
import whiteBishop from "./white-bishop.svg";
import blackQueen from "./black-queen.svg";
import whiteQueen from "./white-queen.svg";
import blackBishop from "./black-bishop.svg" 
import blackKing from "./black-king.svg";
import whiteKing from "./white-king.svg";
import './App.css';

const initialState =[
[
{
  icon:blackRook
},
{
  icon:blackKnight
},
{
  icon:blackBishop
},
{
  icon:blackQueen
},
{
  icon:blackKing
},
{
  icon:blackBishop
},
{
  icon:blackKnight
},
{
  icon:blackRook
}],
[...Array(8)].map(()=>({
  icon:blackPawn
}))
,
...[...Array(4)].map(()=>[...Array(8)].map(()=>({
  icon:null
}))),
[...Array(8)].map(()=>({
  icon:whitePawn
})),
[
  {
    icon:whiteRook
  },
  {
    icon:whiteKnight
  },
  {
    icon:whiteBishop
  },
  {
    icon:whiteQueen
  },
  {
    icon:whiteKing
  },
  {
    icon:whiteBishop
  },
  {
    icon:whiteKnight
  },
  {
    icon:whiteRook
  }
]
]
const App =()=> {
  console.log(blackPawn);
  // let count =0;
  return (
    <div className="App" >
      <div className="chess-board-container">
      <div className ="chess-board">
        {/* {<div class="chess-pawn"> //</div>  */}
   {initialState.map((row,i)=>
   row.map(({icon},j)=>
   <div className="chess-pawn" key={`${i}${j}`}
   style={
     {
       backgroundColor :(i+j)%2?"yellow":"white",
       color:(i+j)%2? "white":"black",
       display:"grid",
       placeItems:"center",
       backgroundImage:  `url(${icon})`,
     }
   }
   ></div>))}
   </div>
   </div>
  </div>
  
  
)}
export default App;  
