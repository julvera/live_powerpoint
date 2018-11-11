const contentReducer= (state={cmdPres:''},action) => {
    //console.log(action);
    switch (action.type) {
        case 'COMMAND_PRESENTATION':
            switch(action.cmdPres){
                case 'SAVE_CMD':
                    const saveCmd={cmdPres:'SAVE_CMD'};
                    return saveCmd
            }
        default:
            return {cmdPres:''};
    }
}
export default contentReducer;
   