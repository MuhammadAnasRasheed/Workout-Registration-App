import { useWorkoutcontext } from "../Hooks/useWorkoutcontext";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

const Workoutdetails=({workout})=>{

    const {dispatch} =useWorkoutcontext();

    const delitem=async()=>{
        const response=await fetch('api/workouts/'+workout._id,{
            method:'DELETE'
        })
        const data=await response.json()
        if(response.ok){
            dispatch({type:'Delete_Workout',payload:data})
        }
    }

    return(
        <div className="workoutdetails">
            <h2 className="title">{workout.title}</h2>
            <p className="loads"><strong>Loads :</strong> {workout.load}</p>
            <p className="reps"><strong>Reps  :</strong> {workout.reps}</p>
            <p className="createdat"><strong>Created AT :</strong>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true})}</p>
            <button className="detbut" onClick={delitem}>Delete</button>
        </div>
    )
}

export default Workoutdetails;