const redux = require('redux')
const createStore = redux.createStore;


//Action Types
const INCREMENT = 'INCREMENT'


//Action Function
const increment = () => {
    return{
        type : INCREMENT
    }
}


//Initial date in store
const initialState = {count : 0}


//Reducer
const reducer = (state=initialState, action)=>{
   
        switch(action.type) {
            case INCREMENT:
                return{
                    ...state,
                    count : state.count + 1
                }
                default :
                return state;
    }
}


//store
let store = redux.createStore(reducer)
console.log("Initial State" , store.getState())


//Subscribe
store.subscribe(()=>(console.log("Update State", store.getState())))


//Call the function
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())

