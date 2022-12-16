import Context from '../Context/index'
import React from 'react'

export const UserReducer=(state,action)=> {
  switch(action.type){
    case "USER_LOGIN": {
        return {
            ...state,
            userDetails: action.payload,
            auth:true
        }
    }
  }
}

export default UserReducer