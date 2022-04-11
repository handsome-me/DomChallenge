const root=document.getElementById("root");

const ERROR_TYPE_NOT_FOUND="ERROR_TYPE_NOT_FOUND";
const div="div";
const style={
    chessbox_view_container:"chessbox-view-container",
    box:"box",
    bcBlack:"bc-black",
    bcWhite:"bc-white",
    bcRed:"bc-red",
}
const CHESS_SIZE=8;
let diagonal=[];
let chessBox=Create2DArray(CHESS_SIZE);

/**Self invoke function */
  (function(){
  console.log("root",root);
  console.log("makeBox", makeBox());
   root.appendChild(makeBox())

  })()


  function Create2DArray(rows) {
    var arr = [];
  
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
  
    return arr;
  }

/**return the Box div */
function makeBox(){
   
  
    try{

    const chessViewContainer= createElement(div);
    
        chessViewContainer.classList.add(style.chessbox_view_container);
       

         chessViewContainer.addEventListener('click',(event)=>{
             console.log("Clicked..... box",event);
             event.stopPropagation();
             const id=event.target.id;
             console.log("id",id);
             const [row,column]=id.split("@");
             getDiagonal(row,column);

         })
          for(let i=0;i<CHESS_SIZE;i++){
            const row=[];
              for(let j=0;j<CHESS_SIZE;j++){
                const box=createElement(div);
                box.classList.add(style.box);
                box.classList.add(getStyle(i,j));
               // row.push(box);
                  console.log("chessbox",chessBox);
                  chessBox[i][j]=box;
                 box.id=i+"@"+j;
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
   
   console.log("Row,column",row,column);
   /**row-1 - right and left */
   //Upper side
   clearUI();

   //right
  let  _column=parseInt(column);
   let _row=parseInt(row);

   let tempCol=_column+1;
    for(let i=_row-1;i>=0;i--){
     
      if(getRef(i,tempCol)){
        diagonal.push(chessBox[i][tempCol]);
      }
       tempCol++;
    }
    //left
      tempCol=_column-1;
    for(let i=row-1;i>=0;i--){
     
      if(getRef(i,tempCol)){
        diagonal.push(chessBox[i][tempCol]);
      }
        
        tempCol--;
    }
    
console.log("upper ",diagonal);
    //Down

     //right
     tempCol=_column+1;
   for(let i=_row+1;i<CHESS_SIZE;i++){
    console.log("chess ",i,"---",tempCol,"checbox=  ",chessBox[i][tempCol]);
    if(getRef(i,tempCol)){
      diagonal.push(chessBox[i][tempCol]);
    }
      tempCol++;
   }
   //left
     tempCol=_column-1;
   for(let  i=_row+1;i<CHESS_SIZE;i++){
    if(getRef(i,tempCol)){
      diagonal.push(chessBox[i][tempCol]);
    }
       tempCol--;
   }
   

   console.log("Diagpnal array", diagonal);
   diagonal.push(chessBox[row][column])
   diagonal.forEach((box)=>{
    box.classList.add(style.bcRed)
   })
}

function getRef(row,column){

  return chessBox[row][column];
}

function clearUI(){
console.log("clear UI");
  diagonal.forEach((box)=>{
    console.log("cleaning", box);
    
    box.classList.remove(style.bcRed)
   });
   diagonal=[];
  
}