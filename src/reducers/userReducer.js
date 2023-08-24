const INITIAL_STATE = {
    user: null,
};

// by default state will be initial state
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;   //if none, give the existing state
    }
};

export default userReducer;
// reducer updates the given state
