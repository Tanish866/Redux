import { bindActionCreators, createStore } from "redux";

function demoReducer(state, action){
    if(action.type == 'add_item'){
        return [...state, {name: action.itemName}, {quantity: action.itemQuantity}]
    }
    return state;
}

const add_item = (name, quantity) => ({
    type: 'add_item',
    itemName: name,
    itemQuantity: ((quantity)? quantity : 1)
})

const initialState = [{name: 'apple'}, {name: 'rice'}];

const store = createStore(demoReducer, initialState);

// console.log(store.dispatch);
console.log(store.getState());

// the only way to update the store is dispatch
const actions = bindActionCreators({ add_item }, store.dispatch);
console.log(actions)


store.dispatch(add_item("Banana"));
store.dispatch(add_item("Mango"));

console.log(store.getState());