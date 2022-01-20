const initialState = {
    show:false
}

export const counterReducer = (state = initialState, action) => {

    if(action.type === "SHOW"){
        return{
            show:true
        }
    }

    if(action.type === "HIDE") {
        return {
            show:action.show
        }
    }

    return state;
}