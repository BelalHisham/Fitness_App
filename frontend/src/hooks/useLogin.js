import { useState } from "react";
import {useAuthContext} from './useAuthContext';
import { Password } from "@mui/icons-material";


export const useLogin = () => {



const [error, setError] = useState(null)
const [isLoading, setIsLoading] = useState(null)
const {dispatch} = useAuthContext() 

const login = async (email, password) => {
    setIsLoading(true)
    setError(null) 

    const response = await fetch('https://fitness-app-five-olive.vercel.app/api/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    } )

    const json = await response.json()

    if(!response.ok){
        setIsLoading(false)
        setError(json.error)
    }
    if (response.ok){
        // save the user to local storage (in case the user closes the website and open it again)
        localStorage.setItem('user', JSON.stringify(json))

        // update authContext 
        dispatch({type: 'LOGIN', payload: json})

        setIsLoading(false)
    }
}

return {login, isLoading, error}

}