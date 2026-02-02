require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const workoutroutes = require('./Routes/workout');

//middleware
//app.use((req,res,next)=>{
//  console.log(req.path,req.method);
//next();
//})

app.use(express.json());


// Route
app.use('/api/workouts', workoutroutes);
const PORT = process.env.PORT;
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connected To db & listening on",PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })




