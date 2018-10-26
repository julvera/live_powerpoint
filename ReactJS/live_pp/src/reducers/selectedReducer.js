const selectedReducer= (state={slid:{}},action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_SELECTED_SLID':
            const newState1={slid:action.obj};
            return newState1;
        default:
            return state;
    }
}
export default selectedReducer;
   