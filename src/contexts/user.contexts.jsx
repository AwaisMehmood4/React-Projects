import {  useEffect, useReducer } from "react";
import { onAuthStateChangedListner, createUserDocumentFromAuth } from "../components/utils/firebase/firebase.utils";
import { createContext } from "react";
import { createAction } from "../components/utils/reducer/reducer.utils";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null, 
});


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log('dispatched');
    console.log(action);
    const {type, payload } = action;
    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReduver`);
    }

}
const INITIAL_STATE = {
    currentUser: null
}


export const UserProvider = ({children}) => {

    // const [currentUser, setCurrentUser] = useState(null); first we used useState , now we used useReducer

   
    const [state, dispatch ] = useReducer(userReducer, INITIAL_STATE);
    const { currentUser } = state;
    console.log(currentUser);

    const setCurrentUser = (user) => {
        dispatch(
            createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

     const value = {
        currentUser,
        setCurrentUser,
    };


    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListner((user)=> {
            if(user) {
                createUserDocumentFromAuth(user);

            }
            setCurrentUser(user);
        });
        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}