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

export const updatePresentation=(presentation)=>{
    return {
        type: 'UPDATE_PRESENTATION',
        obj:presentation
    };
}

export const updatePresentationContent=(title, description)=>{
    return {
        type: 'UPDATE_PRESENTATION_CONTENT',
        title:title,
        description:description
    };
}
export const updateSlid=(tmpSlid)=>{
    return {
        type: 'UPDATE_PRESENTATION_SLIDS',
        slid:tmpSlid,
    };
}

