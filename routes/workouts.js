const express = require('express')
const { createWorkout, getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutcontroller')

const router = express.Router()

//GEt all workouts
router.get('/', getAllWorkouts)

//GEt a single workout
router.get('/:id', getSingleWorkout)

//Post a workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)

module.exports = router
