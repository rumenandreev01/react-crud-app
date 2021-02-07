import React,{createContext,useReducer} from 'react';
import  AppReducer from './AppReducer';

//initial state
const initialState = {
    users : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

   //actions
    const removeUser = (id)=>{
        dispatch({
            type: "REMOVE",
            payload:id
        })
    }

    const addUser = (user)=>{
        dispatch({
            type: "ADD",
            payload:user
        })
    }

    const editUser = (user)=>{
        dispatch({
            type: "EDIT",
            payload:user
        })
    }

    return (
        <GlobalContext.Provider value={{users:state.users,removeUser,addUser,editUser}}>
            {children}
        </GlobalContext.Provider>
    )
}