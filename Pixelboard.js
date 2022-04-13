const colors=[
    'red',
    'pink',
    'blue',
    'green',
    'orange',
    'yellow'
]
const div="div";
const root=document.getElementById("root");

const gridSize=80;

let selectedColor=null;
let active=false;

const style={
  
    gridView:"grid",
    gridBox:"gridBox"

}

// (
//     function(){

//     renderView(root);


// })();
function onClick(event){
    const {target}=event;
     console.log("#121","Click event",selectedColor)
    if(!selectedColor)return;
    active=true;

    target.style.backgroundColor=selectedColor;
}

/**mouse hover event */
function onMouseHover(event){

console.log("#121",active);
    const {target}=event;

     if(!selectedColor || !active)return;
     
     target.style.backgroundColor=selectedColor;

}

function onMouseUp(event){
    console.log("#121","mouse up event",event.target);
    if(active)return;
    active=false;
    if(selectedColor)
    selectedColor=null;
}


renderView(root);

function renderView(root){

    root.classList.add("flex");
   console.log("renderView is called");

  const gridContainer= createElement(div,style.gridView,[{type:"mousedown",onClick:onClick},{type:"mouseup",onClick:onMouseUp},{type:"mouseover",onClick:onMouseHover}]);
  
      renderGridView(gridContainer,gridSize);
      
      const colorPallateContainer=  createElement(div,style.bcBlack,[{type:'click',onClick:(event)=>{
        const {target}=event;
       
        cleaning();
        if(target.id)
        {
            selectedColor=target.id;
            renderUI()
        }

      }}]);
    for(let i=0;i<5;i++){
       const box= createElement(div);
       box.classList.add("box");
       box.id=colors[i];
       box.style.backgroundColor=colors[i];
       colorPallateContainer.appendChild(box);
    };
    appendToRoot(colorPallateContainer,gridContainer);

}


function cleaning(){
    active=false;

}
function appendToRoot(...components){

 if(!components.length)return;
 
    components.forEach((component)=>{

        root.appendChild(component)
       
    }) 

}
function renderUI(){
    console.log("select color",selectedColor);
}

function renderGridView(parent,size){
  
    
    while(size){

        const element_box=createElement(div,style.gridBox);
        element_box.id=size;
        parent.appendChild(element_box);

    size--;
    }

}
 

/**Make the element -(div, p or any other) */
function createElement(type , className,events){
   
    const element= document.createElement(type);
   
      if(element){
          element.classList.add(className);
          if(events){
              events.forEach(event => {
                  console.log("applying the event ",event.type,"--",event.onClick)
                  console.log("element",element);
               element.addEventListener(event.type,event.onClick)   
              });
          }
        return element;
      }
     
   
     throw ERROR_TYPE_NOT_FOUND;
   
   }


   