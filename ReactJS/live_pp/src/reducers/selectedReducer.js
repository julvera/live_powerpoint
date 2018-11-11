const selectedReducer= (state={slid:{}},action) => {
    //console.log(action);
    switch (action.type) {
        case 'UPDATE_SELECTED_SLID':
            const newState1={slid:action.obj};
            return newState1;
        case 'UPDATE_DRAGGED_ELEMENT':
            const newState2 = JSON.parse(JSON.stringify(state.slid));
            newState2.content_id = action.obj;
            const newState2Slid = {slid: newState2};
            return newState2Slid;
        default:
            return state;
    }
}
export default selectedReducer;
   