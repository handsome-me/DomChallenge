const colors={
    red:'red',
    pink:'pink',
    blue:'blue',
    green:'green',
    orange:'orange',
    yellow:'yellow'
};
const div="div";
const root=document.getElementById("root");

const style={
  
    gridView:"grid",

}

(function(){
    renderView(root);
})();

function renderView(root){
   
  const element=  createElement(div);

  element.classList.add(style.gridView);
  
  
   

  root.appendChile(root);
}
 

/**Make the element -(div, p or any other) */
function createElement(type){
   
    const element= document.createElement(type);
   
      if(element)
     return element;
   
     throw ERROR_TYPE_NOT_FOUND;
   
   }
   