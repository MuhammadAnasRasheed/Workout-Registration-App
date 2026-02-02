import { useEffect } from "react"
import Workoutdetails from "../Components/Workoutdetails";
import Workoutform from "../Components/Workoutform";
import { useWorkoutcontext } from "../Hooks/useWorkoutcontext";

const Home = () => {
    const {workouts,dispatch}=useWorkoutcontext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch('/api/workouts');
            const data = await res.json();
            if(res.ok){
                dispatch({type:'Set_Workout',payload:data})
            }
        };
        fetchWorkouts();
    }, [dispatch]);
    return (
        <div className="Home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <Workoutdetails key={workout._id} workout={workout} />
                ))}
            </div>
            <Workoutform />
        </div>
    )
}

export default Home