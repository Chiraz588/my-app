import { CLEARERRORS, CURRENT, FAIL, LOAD, LOGIN, LOGOUT, REGISTER,INVITED} from "../types/userTypes"
import axios from 'axios'

import { EDIT_USER_SUCC, EDIT_USER_FAIL} from "../types/userTypes"
export const register=(user,history)=>async(dispatch)=>{
    dispatch({type:LOAD})
try {
    const res=  await  axios.post('/api/users/SignUp',user)

    dispatch({type:REGISTER, payload:res.data})  // {msg,user,token}

    history.push('/Profile')

} catch (error) {
    dispatch({type:FAIL, payload: error.response.data})
}
}

export const login=(user,history)=>async(dispatch)=>{

dispatch({type:LOAD})

    try {
        const res= await axios.post('/api/users/SignIn',user)
        dispatch({type:LOGIN, payload:res.data}) // msg,found(user),token
        // console.log(res.data.found)
        history.push('/Profile')
    } catch (error) {
        dispatch({type:FAIL,payload:error.response.data})
        // error.response.data.errors.map(el=>  alert(el.msg))
    }
}
export const Invited=(user,history)=>async(dispatch)=>{

    dispatch({type:LOAD})
    
        try {
            const res= await axios.post('/api/users/invited',user)
            dispatch({type:INVITED, payload:res.data}) // msg,found(user),token
            // console.log(res.data.found)
            history.push('/Profile')
        } catch (error) {
            dispatch({type:FAIL,payload:error.response.data})
            // error.response.data.errors.map(el=>  alert(el.msg))
        }
    }

export const current=()=>  async (dispatch)=>{
    const config={

        headers:{
            Authorization: localStorage.getItem('token')
        }

    }
    try {
        const res= await axios.get('/api/users/current',config)
        dispatch({type:CURRENT,  payload: res.data.user})

    } catch (error) {
        console.log(error)
    }
}

export const logout=()=>{
    return {type:LOGOUT}
}
export const clearerrors=()=>{
    return {type:CLEARERRORS}
}
 //Edit USER

 export const edituser =(Id , edit) => async(dispatch) => {
    try {
     const config = {
         headers: { authorization : localStorage.getItem('token')}
                     }
        await axios.put(`/api/users/${Id}`, edit , config)
        dispatch ({type : EDIT_USER_SUCC})
     //    dispatch(currentUSER())
     //    history.push('/profile')

         
    } catch (error) {
    dispatch ({type : EDIT_USER_FAIL , payload : error.response.data})   // {errors : []}    
        
    }

}

