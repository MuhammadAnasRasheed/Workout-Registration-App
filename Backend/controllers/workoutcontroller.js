const Workout = require('../Models/workoutmodel');
const mongoose = require('mongoose');

const createworkout = async (req, res) => {
    console.log("client sent this",req.body);
    const { title, reps, load } = req.body;
    let Emptyfields=[];
    if(!title){
        Emptyfields.push(title);
    }

    if(!reps){
        Emptyfields.push(reps);
    }

    if(!load){
        Emptyfields.push(load);
    }

    if(Emptyfields.length>0){
        return res.status(400).json({error:'please fill out all fields',Emptyfields})
    }
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getworkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({});
        res.status(200).json(workouts);
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getworkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: 'workout not found' })
    }
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
}

const updateworkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: 'workout not found' })
    }
    const upworkout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!upworkout) {
        return res.status(400).json({ error: 'no such workout' })
    }
    res.status(200).json(upworkout);
}

const delworkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ msg: "no such workout found" })
    }
    const remworkout = await Workout.findOneAndDelete({ _id: id })
    if (!remworkout) {
        return res.status(400).json({ error: 'no such workout' })
    }
    res.status(200).json(remworkout);
}



module.exports = {
    createworkout,
    getworkout,
    getworkouts,
    updateworkout,
    delworkout
}