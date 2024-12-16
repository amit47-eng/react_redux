import theamReducer from "./theamReduser.js"


const rootreducer = combineReducer ({
    theme: themeReducer,
    counter: counterReducer,
});

export default rootreducer;