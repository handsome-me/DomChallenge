const root=document.getElementById("root");
const ERROR_TYPE_NOT_FOUND="ERROR_TYPE_NOT_FOUND";
const div="div";
const style={
    chessbox_view_container:"chessbox-view-container"
}
const CHESS_SIZE=8;

/**Self invoke function */
  (function(){

   root.appendChild()

  })()

/**return the Box div */
function makeBox(){

    try{

    const chessViewContainer= createElement(div);
    
        chessViewContainer.classList.add(style.chessbox_view_container);
        
        

    }catch(error){
        console.error("ERROR",error);

    }


}


/**Make the element -(div, p or any other) */
function createElement(type){
   
 const element= document.createElement(type);

   if(element)
  return element;

  throw ERROR_TYPE_NOT_FOUND;

}