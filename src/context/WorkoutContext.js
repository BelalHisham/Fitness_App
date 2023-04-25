import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                /* the function go through each workout and it returns true for every workout id that dose
                not match the workout that we want to delete so it keeps it but if the id matches the it
                will return false so we delete the workout */
                workouts: state.workouts.filter((w) => w._id !== action.payload._id )
            }
        default:
            return state
    }
}

export const WorkoutContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })

    // dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})

    return (
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}

