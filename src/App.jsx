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
import {useState} from 'react';
import './App.css';

const initialState =[
[
{
  icon:blackRook,
  color:"black",
  type:"rook"
},
{
  icon:blackKnight,
  color:"black",
  type:"knight"
},
{
  icon:blackBishop,
  color:"black",
  type:"bishop"
},
{
  icon:blackQueen,
  color:"black",
  type:"queen"
},
{
  icon:blackKing,
  color:"black",
  type:"king"
},
{
  icon:blackBishop,
  color:"black",
  type:"bishop"
},
{
  icon:blackKnight,
  color:"black",
  type:"knight"
},
{
  icon:blackRook,
  color:"black",
  type:"rook"
}],
[...Array(8)].map(()=>({
  icon:blackPawn,
  color:"black"
}))
,
...[...Array(4)].map(()=>[...Array(8)].map(()=>({
  icon:null
}))),
[...Array(8)].map(()=>({
  icon:whitePawn,
  color:"white"
})),
[
  {
    icon:whiteRook,
    color:"white",
  type:"rook"
  },
  {
    icon:whiteKnight,
    color:"white",
    type:"knight"
  },
  {
    icon:whiteBishop,
    color:"white",
    type:"bishop"
  },
  {
    icon:whiteQueen,
    color:"white",
    type:"queen"
  },
  {
    icon:whiteKing,
    color:"white",
    type:"king"
  },
  {
    icon:whiteBishop,
    color:"white",
    type:"bishop"
  },
  {
    icon:whiteKnight,
    color:"white",
    type:"knight"
  },
  {
    icon:whiteRook,
    color:"white",
    type:"rook"
  }
]
]
const App =()=> {
  const[chessState,setChessState]= useState(initialState);
  const[activeColumn,setActiveColumn]=useState([null,null]);
  const[lastMoved,setLastMoved] = useState("black");
  console.log(blackPawn);
  // let count =0;
  const changePosition=(initialX,initialY,finalX,finalY)=>{
    const newState = [...chessState];
    let newPositionColumn =[...newState[finalX]];
    newPositionColumn[finalY]={
      icon:newState[initialX][initialY].icon,
      color:newState[initialX][initialY].color,
      type:newState[initialX][initialY].type
    };
    newState[finalX]=newPositionColumn;

     let newPositionColumn2 =[...newState[initialX]];
    newPositionColumn2[initialY]={icon:null};
    newState[initialX]=newPositionColumn2
    setChessState(newState);
    setLastMoved(lastMoved==="black"?"white":"black")
    setActiveColumn([null,null])
  }
  const isLegalMove =(initialX,initialY,finalX,finalY)=>{
    if(initialX ===null)return false;
    const currentPiece =chessState[initialX][initialY];
    const newPosition =chessState[finalX][finalY];
    if(currentPiece.color ===lastMoved) return false;
    if(currentPiece.type=== "pawn"){
      if(currentPiece.color === "white"){
        if(finalY!==initialY){
          if(newPosition.color ==="black"&& finalX -initialX ===1 && Math.abs(initialY-finalY)===1)return true;
          return false
        }
        if(((initialX===6 && initialX - finalX ===2 && chessState[initialX -1][initialY].icon===null)||(initialX-finalX ===1)) && chessState[finalX][finalY].icon === null)return true;
        return false;
      }

      if(currentPiece.color === "black"){
        if(finalY !== initialY){
          if(newPosition.color === "white" && initialX-finalX  === 1 && Math.abs(initialY - finalY) === 1)return true;
          return false;
        }
        if(((initialX===1 && finalX - initialX ===2 && chessState[initialX +1][initialY].icon===null)||(finalX-initialX ===1)) &&
        chessState[finalX][finalY].icon === null)return true;
        return false;
      }
    } 
    if(currentPiece.type === "rook"){
      if(initialX === finalX){
        let i = initialX<finalX?initialX+1:finalX+1;
        let last = initialX<finalX?finalX:initialX;
        for(;i<last;i++){
          if(chessState[i][initialY].icon !== null)return false;
        }
        if(newPosition.color !== currentPiece.color)return true;
      };
      if(initialY === finalY){
        let i = initialY<finalY?initialY+1:finalY+1;
        let last = initialY<finalY?finalY:initialY;
        for(;i<last;i++){
          if(chessState[initialX][i].icon !== null)return false;
        }
        if(newPosition.color !== currentPiece.color)return true;
      };
      return false;
    }
    return true;
  }

  
  return (
    <div className="App" >
      <div className="chess-board-container">
      <div className ="chess-board">
        {/* {<div class="chess-pawn"> //</div>  */}
   {chessState.map((row,i)=>
   row.map(({icon},j)=>
   <div className="chess-pawn" key={`${i}${j}`}
   style={
     {
       backgroundColor :(i+j)%2?"yellow":"white",
       color:(i+j)%2? "white":"black",
       display:"grid",
       placeItems:"center",
       backgroundImage:  `url(${icon})`,
       border: activeColumn[0]=== i && activeColumn[1]===j && "1px solid black"
     }

   }
   onClick={()=>{
     if(activeColumn[0]=== i && activeColumn[1] === j)return
     if(isLegalMove(activeColumn[0],activeColumn[1],i,j)){
       changePosition(activeColumn[0],activeColumn[1],i,j);
     }else if(chessState[i][j].icon !==null){
setActiveColumn([i,j]);
     }
// }  else{changePosition(activeColumn[0],activeColumn[1],i,j);
// } 
}}
   ></div>))}
   </div>
   </div>
  </div>
  
  
)}
export default App;  
