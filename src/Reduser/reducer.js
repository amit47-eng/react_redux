import { DECRIMENT, INCRIMENT } from "../Actions/actions";

const initialState={counter: 0};

const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCRIMENT: 
            return {counter: state.counter + 1};

        case DECRIMENT:
            return {counter: state.counter - 1};
        default:
            return state;
    }
}
export default counterReducer