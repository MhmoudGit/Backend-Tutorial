const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

//GEt all workouts
router.get('/', async (req, res) => {
    const allWorkouts = await Workout.find()
    res.status(200).json(allWorkouts)
})

//GEt a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get single workout'})
})

//Post a workout 
router.post('/', async (req, res) => {
    const {title, reps, load} = req.body

    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
})

//Delete a workout
router.delete('/', async (req, res) => {
    const {title} = req.body

    try {
        const deleteWorkout = await Workout.deleteOne({title})
        res.status(200).json(deleteWorkout)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
})

//Update a workout
router.patch('/', (req, res) => {
    res.json({msg: 'Update a workout'})
})

module.exports = router