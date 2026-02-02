import { useState } from "react";
import { useWorkoutcontext } from "../Hooks/useWorkoutcontext";
const Workoutform = () => {

    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [Error, setError] = useState('');
    const [Emptyfields, setEmptyfields] = useState([]);
    const {dispatch}=useWorkoutcontext();

    const handlesubmit = async (e) => {
        e.preventDefault();

        const workout = { title, load, reps };

        const response = await fetch('api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await response.json();

        if (!response.ok) {
            setError(data.error)
            setEmptyfields(data.Emptyfields)
        }
        if (response.ok) {
            dispatch({type:'Create_Workout',payload:data})
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            setEmptyfields([])
            console.log("Workout Added Successfully", data);
        }

    }

    return (
        <form className="create" onSubmit={handlesubmit}>
            <h2 className="form-heading">Workout Form</h2>
            <label ><strong>Exercise</strong></label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={Emptyfields.includes(title)?'error':''}
            />
            <label ><strong>Load (in Kgs)</strong></label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={Emptyfields.includes(load)?'error':''}
            />
            <label ><strong>Reps</strong></label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={Emptyfields.includes(reps)?'error':''}
            />
            <button>Add Workout</button>
        </form>
    )
}
export default Workoutform;
