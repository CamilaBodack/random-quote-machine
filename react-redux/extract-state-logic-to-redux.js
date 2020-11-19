/*
Now that you finished the React component, you need to move the logic it's performing locally in its state into Redux. This is the first step to connect the simple React app to Redux. The only functionality your app has is to add new messages from the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.
*/

// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD'

// action creator
function addMessage(message){
    return {type: ADD, message}
}

//reducer
const messageReducer = (previousState = [], action) => {
    // acessando o type do objeto criado na action
    switch(action.type){
        case ADD:
        //se ADD, então clona o estado inicial e adiciona a mensagem que veio da action
        return [...previousState, action.message]
        break;
        default:
        return previousState
    }
}

const store = Redux.createStore(messageReducer)
