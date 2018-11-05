let Tools={}

Tools.generateUUID= function(){
       var d = new Date().getTime();
       var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)      {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
                return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };

Tools.getNextSlidIndex= function(array,slidId){
    let index=-1;
    for(var i=0;i<array.length;i++){
        if(slidId==array[i].id){
            index=i;
            break;
        }
    }
    if(index+1<array.length){
        return index+1;
    }
    return array.length-1;
}

Tools.getPrevSlidIndex=function(array,slidId){
    let index=-1;
    for(var i=0;i<array.length;i++){
        if(slidId==array[i].id){
            index=i;
            break;
        }
    }
    if(index-1>=0){
        return index-1;
    }
    return 0;
}


module.exports = Tools;