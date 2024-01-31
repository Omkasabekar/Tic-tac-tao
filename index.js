let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let display=document.querySelector("#msg");

let turno=true; // to check which player is playing player1 or 2 o,x

const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]; // pattern no of boxes winning

const enabledBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}

const reset=()=>{
    turno=true;
    enabledBoxes();
    display.parentElement.classList.add("hide");
}

newbtn.addEventListener("click",reset);

resetbtn.addEventListener("click",reset);

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerHTML="o";   // also you can use innerText
            turno=false;
        }
        else{
            box.innerHTML="x";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const checkwinner=(()=>{
    for (pattern of winpattern) {
        // Inside the loop, pattern represents one of the sub-arrays in winpattern
        let pos1val = boxes[pattern[0]].innerText;  // Get the symbol in the first position of the pattern
        let pos2val = boxes[pattern[1]].innerText;  // Get the symbol in the second position of the pattern
        let pos3val = boxes[pattern[2]].innerText;  // Get the symbol in the third position of the pattern
    
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            // Check if all three positions are non-empty
            if (pos1val === pos2val && pos2val === pos3val) {
                // Check if the symbols in the three positions are the same
                showWinner(pos1val);
            }
        }
    }
    
});

const showWinner=(winner)=>{
    display.innerHTML = `Congratulations, winner is ${winner}`;
    display.parentElement.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}



