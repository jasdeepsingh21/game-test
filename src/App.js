import React from "react";
import "./App.css";
import Popup from "./Components/Popup";
import Matrix from "./Components/matrix";

function App() {
  const [matrixSize, setMatrixSize] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  const [result,setResult] = React.useState('');

  const gameRst = (rst) => {
    setResult(rst)
  }
  const startGame = () => {
    const time = document.getElementById("time").value;
    const matSize = document.getElementById("matrix").value;

    if(time > 0 && time < 5 && matSize >0 && matSize<2000){
      setMatrixSize(document.getElementById("matrix").value);
      setTimer(document.getElementById("time").value);
    }
    else{
      alert('invalid matrix size and time value\ntime in between 0 and 5 secs\n mat size 0 and 2000');
    }

    
  };

  return (
    <div className="App">
      {matrixSize === 0 && timer === 0 ? (
        <Popup startGame={startGame} />
      ) : (
        <Matrix matrix={matrixSize} time={timer} result={gameRst}/>
      )}
      {result && result}
    </div>
  );
}

export default App;
