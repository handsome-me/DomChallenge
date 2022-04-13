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
    gridBox:"gridBox"

}

// (
//     function(){

//     renderView(root);


// })();
function onClick(event){


console.log("event target",event.currentTarget);

}

renderView(root);

function renderView(root){


   

    root.classList.add(style.gridView);
   console.log("renderView is called");

  const element=  createElement(div);

  element.classList.add(style.gridView); 
  element.addEventListener('click',onClick);
    //"mouseenter
    element.addEventListener('mouseover',onClick);
   for(let i=0;i<20;i++){
    
     const element_box=createElement(div);
     element_box.classList.add(style.gridBox);
    
     element.appendChild(element_box);

   }

  root.appendChild(element);

}
 

/**Make the element -(div, p or any other) */
function createElement(type){
   
    const element= document.createElement(type);
   
      if(element)
     return element;
   
     throw ERROR_TYPE_NOT_FOUND;
   
   }
   