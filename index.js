let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-gamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO=true; //playerX , playerO

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(trunO===true){
            box.innerText="O";
            trunO=false;
        }

        else{
            box.innerText="X";
            trunO=true;       
        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerHTML;
        let pos2val=boxes[pattern[1]].innerHTML;
        let pos3val=boxes[pattern[2]].innerHTML;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBox();
};

const disabledBox=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const anableBox=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const restGame=()=>{
    trunO=true;
    anableBox();
    msgcontainer.classList.add("hide");

};

newgameBtn.addEventListener("click",restGame);
resetBtn.addEventListener("click",restGame);