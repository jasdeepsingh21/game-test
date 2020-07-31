import React from "react";

function Matrix({ matrix, time, result }) {
  let matrixArr = new Array(matrix);

  for (let i = 0; i < matrix; i++) {
    matrixArr[i] = new Array(matrix);
  }

  for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
      matrixArr[i][j] = `${i}${j}`;
    }
  }
  const handleClick = (e) => {
    e.target.classList.remove("active");
    clearInterval(timer);
    idx = 0;
    idx1 = 0;
    gameTime();
  };

  let idx = 0;
  let idx1 = 0;
  let timer = '';
  const gameTime = () => {
    timer = setInterval(() => {
      if (idx1 < matrix) {
        const matCol = document.querySelector(`div#col-${idx}${idx1}`)
          .classList;
        if (!matCol.contains("active")) matCol.add("active");
      }
      if (idx1 < matrix) {
        idx1++;
      } else {
        if (idx < matrix) {
          idx++;
          idx1 = 0;
        }
      }
      if (idx >= matrix) {
        console.log("end");
        clearInterval(timer);
          const check = document.querySelectorAll('div.matrix-col');
              check.forEach((ele,idx)=>{
                  if(!ele.classList.contains('active')){
                      console.log('restarting game')
                      gameTime();
                  }
                  else{
                      if(idx+1 === check.length){
                          result('COMPUTER WINS !')
                      }
                  }
              })

      }
    }, time * 1000);
  };
  React.useEffect(() => {
   
    gameTime();
    return () => {
      idx = 0;
      clearInterval(timer);
    };
  });

  return (
    <div id="matrixDiv">
      {matrixArr.map((ele, idx) => {
        return (
          <div key={Math.random() + 1} className="matrix-row" id={`row-${idx}`}>
            {ele.map((col, idx1) => {
              return (
                <div
                  key={Math.random() + 2}
                  className="matrix-col"
                  onClick={handleClick}
                  id={`col-${idx}${idx1}`}
                >
                  {col}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Matrix;
