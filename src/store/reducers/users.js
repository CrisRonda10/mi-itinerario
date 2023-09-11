import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";

const {signin,signin_token,signout,register} = user_actions

const initial_state = {
    users: [],
    user: {},
    token: '',
    messages: [],
    success: false
}

const user_reducer = createReducer(
    initial_state,
    builder=> builder.addCase(
        signin.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                messages: action.payload.messages
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                user:action.payload.user,
                token:action.payload.token
            }
            return new_state
        }
    ).addCase(
        signout.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                user:action.payload.user,
                token:action.payload.token
            }
            return new_state
        }
    ).addCase(
        register.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                success:action.payload.success,
                messages: action.payload.messages
            }
            return new_state
        }
    )
)

export default user_reducer