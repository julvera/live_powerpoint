var Tools = require('../services/Tools.js');

const updateModelReducer=(state={presentation:{},content_map:{}},action) => {
 //console.log(action);
 switch (action.type) {
    case 'UPDATE_PRESENTATION':
        const newStatePresentation={presentation:action.obj, content_map:state.content_map};
        return newStatePresentation; 

    case 'UPDATE_PRESENTATION_CONTENT':
        let currentPres_Content = JSON.parse(JSON.stringify(state.presentation))
        currentPres_Content.title = action.title;
        currentPres_Content.description = action.description
        const newStatePresentationContent={presentation:currentPres_Content,content_map:state.content_map};
        return newStatePresentationContent; 

    case 'UPDATE_PRESENTATION_SLIDS':
        let currentPres = JSON.parse(JSON.stringify(state.presentation))
        switch (action.actionType){
            case 'Update':
                for(let slid in currentPres.slidArray){
                    if(currentPres.slidArray[slid].id === action.slid.id){
                        currentPres.slidArray[slid] = action.slid;
                    }
                }
                const newStatePresentation_Slid={presentation:currentPres,content_map:state.content_map};
                return newStatePresentation_Slid;
            case 'Add':
                currentPres.slidArray.push(action.slid);
                const addSlidPresentation_Slid={presentation:currentPres,content_map:state.content_map};
                console.log(addSlidPresentation_Slid)
                return addSlidPresentation_Slid;
            case 'Remove':
                if(action.slid.id <= currentPres.slidArray.length){
                    currentPres.slidArray.splice(action.slid.id,1)
                }
                const removeSlidPresentation_Slid={presentation:currentPres,content_map:state.content_map};
                console.log(removeSlidPresentation_Slid)
                return removeSlidPresentation_Slid;
            default:
                const noStatePresentation_Slid={presentation:currentPres,content_map:state.content_map};
                return noStatePresentation_Slid;
        }
        
        
            
        
        

    case 'UPDATE_CONTENT_MAP':
        const newStateContent_Map={content_map:action.obj,presentation:state.presentation};
        return newStateContent_Map; 
        
    case 'ADD_CONTENT':
        let content_map_tmp = JSON.parse(JSON.stringify(state.content_map));
        var newSlidIndex = Tools.generateUUID();
        content_map_tmp[newSlidIndex] = action.obj
        const newStateAdd_Contnet = {content_map:content_map_tmp,presentation:state.presentation}
        return newStateAdd_Contnet; 
    default:
        return state;
    }
}
export default updateModelReducer;