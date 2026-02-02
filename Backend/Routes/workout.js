const express=require('express');
const router=express.Router();
const Workout=require('../Models/workoutmodel');
const {createworkout,getworkout,getworkouts,updateworkout,delworkout}=require('../controllers/workoutcontroller');

router.get('/',getworkouts);

router.get('/:id',getworkout)

router.post('/',createworkout);

router.delete('/:id',delworkout);

router.patch('/:id',updateworkout);

module.exports=router;