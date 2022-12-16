import React from 'react'
import {useReducer} from 'react'
import Context from '../Context'
import UserReducer from './reducer'
function Provider({children}) {
    const initialState={
        auth:false,
        userDetails:{},
    }
    const [state,dispatch]=useReducer(UserReducer,initialState)
    const UserLogin = (user) => {
      dispatch({ type: "USER_LOGIN", payload: user });
    };
  return (
    <Context.Provider value={{
        state,
        UserLogin
    }}>
     {children}
    </Context.Provider>
  )
}

export default Provider