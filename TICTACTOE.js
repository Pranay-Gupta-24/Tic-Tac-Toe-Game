let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-btn");
let newButton=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
const winpatterns=[
   [0,1,2],[0,3,6],[0,4,8],
   [1,4,7],[2,5,8],[2,4,6],
   [6,7,8],[3,4,5]
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const showDraw=()=>{
    msg.innerText="No-Body won!! It's a draw!";
    msgContainer.classList.remove("hide");
    disabledBoxes();
    boxes.forEach((box)=>
    box.classList.add("draw"));
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked.");
        if(turn0){
            box.innerText="0";
            box.style.color="red";
            turn0=false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
 const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 };
 const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 }
const showWinner=(winner)=>{
      msg.innerText=`Congratulations, Winner is ${winner}.`;
      msgContainer.classList.remove("hide");
      disabledBoxes();
}
const checkWinner = ()=>{
    for(let pattern of winpatterns){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                return;
            }
        }
        let filled=true;
        boxes.forEach((box)=>{
            if(box.innerText===""){
                filled=false;
            }
        });
        if(filled){
            showDraw();
        }
    };
}

newButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);