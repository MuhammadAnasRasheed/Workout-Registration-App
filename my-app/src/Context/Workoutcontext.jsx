import { createContext, useContext, useReducer } from "react";

export const Workoutcontext = createContext();

export const Workoutreducer = (state, action) => {
    switch (action.type) {
        case 'Set_Workout':
            return {
                workouts: action.payload
            }
        case 'Create_Workout':
            return {
                workouts:[action.payload,...state.workouts]
            }
        case 'Delete_Workout':
            return{
                workouts:state.workouts.filter((w)=>w._id!==action.payload._id)
            }
        default:
            return state
    }
}

export const Workoutcontextprovider = ({ children }) => {
    const [state, dispatch] = useReducer(Workoutreducer, {
        workouts: null
    })

    return (
        <Workoutcontext.Provider value={{...state, dispatch}}>
            {children}
        </Workoutcontext.Provider>
    )
}