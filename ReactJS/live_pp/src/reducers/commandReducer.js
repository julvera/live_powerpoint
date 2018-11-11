const contentReducer= (state={cmdPres:''},action) => {
    //console.log(action);
    switch (action.type) {
        case 'COMMAND_PRESENTATION':
            switch(action.cmdPres){
                case 'SAVE_CMD':
                    const saveCmd={cmdPres:'SAVE_CMD'};
                    return saveCmd
                case 'START':
                    const startCmd={cmdPres:'START'};
                    return startCmd
                case 'END':
                    const endCmd={cmdPres:'END'};
                    return endCmd
                case 'PAUSE':
                    const pauseCmd={cmdPres:'PAUSE'};
                    return pauseCmd
                case 'BEGIN':
                    const beginCmd={cmdPres:'BEGIN'};
                    return beginCmd
                case 'NEXT':
                    const nextCmd={cmdPres:'NEXT'};
                    return nextCmd
                case 'PREV':
                    const prevCmd={cmdPres:'PREV'};
                    return prevCmd
            }
        default:
            return {cmdPres:''};
    }
}
export default contentReducer;
   