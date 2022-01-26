const lowerButton = document.querySelector('.lower_one-button');
const addButton = document.querySelector('.add_one-button');
const currentNumberContainer = document.querySelectorAll('.current_number-numbers_container');
const STATE = {
    firstNumber: 0,
    secondNumber: 0,
    thirdNumber: 0,
    maxNumber: 9,
    minNumber: 0
}

window.addEventListener('load', () => {
    setCurrrentNumber();
})

lowerButton.onclick = () => {
    const ACTION = {
        type: "DICREMENT",
        state: STATE
    }

    counterButtonsHandler(ACTION)
}

addButton.onclick = () => {
    let ACTION = {
        type: "INCREMENT",
        state: STATE
    }

    counterButtonsHandler(ACTION);
}

function counterButtonsHandler({type, state}){
    switch(type){
        case "INCREMENT":
            state.firstNumber++;
            if(state.firstNumber > state.maxNumber){
                state.firstNumber = state.minNumber;
                state.secondNumber ++;
            }
            if(state.secondNumber > state.maxNumber){
                state.secondNumber = state.minNumber;
                state.thirdNumber ++;
            }
            if(state.thirdNumber > state.maxNumber){
                state.thirdNumber = state.minNumber;
            }
            break;
        case "DICREMENT": 
            state.firstNumber--;
            if(state.firstNumber < state.minNumber){
                state.firstNumber = state.maxNumber;
                state.secondNumber--;
            }
            if(state.secondNumber < state.minNumber){
                state.secondNumber = state.maxNumber;
                state.thirdNumber--;
            }
            if(state.thirdNumber < state.minNumber){
                state.thirdNumber = state.maxNumber;
            }
            break;
    }

    setCurrrentNumber();
}

function setCurrrentNumber(){
    currentNumberContainer[2].style.marginTop = `-${80 * STATE.firstNumber}px`
    currentNumberContainer[1].style.marginTop = `-${80 * STATE.secondNumber}px`
    currentNumberContainer[0].style.marginTop = `-${80 * STATE.thirdNumber}px`
}
