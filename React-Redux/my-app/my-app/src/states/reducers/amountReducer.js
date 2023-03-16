import reducers from "@reduxjs/toolkit"

export default reducers = (state=0, action)=>{
    if(action.type=='deposit'){
        return state + action.payload
    }
    else if(action.type=='deposit'){
        return state + action.payload
    }
    else{
        return state
    }
}