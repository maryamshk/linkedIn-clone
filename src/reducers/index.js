import { combineReducers } from "redux";

import userReducer from "./userReducer";

const rootReducer = combineReducers({ //Allow us to combine all reducers
    userState: userReducer,
});

export default rootReducer;