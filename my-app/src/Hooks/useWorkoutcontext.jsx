import { useContext } from "react";
import { Workoutcontext } from "../Context/Workoutcontext";

export const useWorkoutcontext=()=>{
    const context=useContext(Workoutcontext);
    if (!context) {
        throw Error("useWorkoutcontext must used inside workoutcontextprovider");
        
    }
    return context;
}