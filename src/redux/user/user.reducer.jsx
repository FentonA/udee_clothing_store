import { UserActionTypes} from './user.types'

const INITIAL_SATE ={
    currentUser: null
}

const userReducer = (currentState = INITIAL_SATE, action)=>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...currentState,
                currentUser: action.payload
            }
        default:
            return currentState;
    }
}

export default userReducer;