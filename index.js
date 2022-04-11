const root=document.getElementById("root");

const ERROR_TYPE_NOT_FOUND="ERROR_TYPE_NOT_FOUND";
const div="div";
const style={
    chessbox_view_container:"chessbox-view-container",
    box:"box",
    bcBlack:"bc-black",
    bcWhite:"bc-white"
}
const CHESS_SIZE=8;
const chessBox=[CHESS_SIZE][CHESS_SIZE];

/**Self invoke function */
  (function(){
  console.log("root",root);
  console.log("makeBox", makeBox());
   root.appendChild(makeBox())

  })()

/**return the Box div */
function makeBox(){

    try{

    const chessViewContainer= createElement(div);
    
        chessViewContainer.classList.add(style.chessbox_view_container);
         
          for(let i=0;i<CHESS_SIZE;i++){
            const row=[];
              for(let j=0;j<CHESS_SIZE;j++){
                const box=createElement(div);
                box.classList.add(style.box);
                box.classList.add(getStyle(i,j));
               // row.push(box);
               chessBox[i][j]=box;
                chessViewContainer.appendChild(box);
              }
            // chessViewContainer.appendChild(...row);
             
          }
          
         
      return chessViewContainer;
    }catch(error){
        
        console.error("ERROR",error);

    }


}

function getStyle(row,column){

    if(row%2==0){
   return column%2==0?style.bcWhite:style.bcBlack
    }else{

    }
    return column%2==0?style.bcBlack:style.bcWhite;

}

/**Make the element -(div, p or any other) */
function createElement(type){
   
 const element= document.createElement(type);

   if(element)
  return element;

  throw ERROR_TYPE_NOT_FOUND;

}


/**getDiagonal array*/
function getDiagonal(row,column){
   const diagonal=[];
   /**row-1 - right and left */
   //Upper side
   //right
   let tempCol=column+1;
    for(const i=row-1;i>=0;i--){
       diagonal.push(chessBox[i][tempCol]);
       tempCol++;
    }
    //left
      tempCol=column;
    for(const i=row-1;i>=0;i--){
        diagonal.push(chessBox[i][tempCol]);
        tempCol--;
    }
    

    //Down

     //right
     tempCol=column+1;
   for(const i=row+1;i;i++){
      diagonal.push(chessBox[i][tempCol]);
      tempCol++;
   }
   //left
     tempCol=column;
   for(const i=row-1;i>=0;i++){
       diagonal.push(chessBox[i][tempCol]);
       tempCol--;
   }
   
}
