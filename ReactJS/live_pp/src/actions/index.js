export const setSelectedSlid=(slid_obj)=>{
    return {
        type: 'UPDATE_SELECTED_SLID',
        obj:slid_obj
    };
}

export const updateContentMap=(content_map)=>{
    return {
        type: 'UPDATE_CONTENT_MAP',
        obj:content_map
    };
}

//charge la présentatio dans le store
export const updatePresentation=(presentation)=>{
    return {
        type: 'UPDATE_PRESENTATION',
        obj:presentation
    };
}
//Modifie le titre et la description de la presentation
export const updatePresentationContent=(title, description)=>{
    return {
        type: 'UPDATE_PRESENTATION_CONTENT',
        title:title,
        description:description
    };
}
export const updateSlid=(actionType,tmpSlid)=>{
    return {
        type: 'UPDATE_PRESENTATION_SLIDS',
        slid:tmpSlid,
        actionType: actionType,
    };
}

export const updateDraggedElt= (id) => {
    return {
        type: 'UPDATE_DRAGGED_ELEMENT',
        obj: id,
    }
}

export const sendNavCmd= (cmdPres) => {
    return {
        type: 'COMMAND_PRESENTATION',
        cmdPres: cmdPres,
    }
}

