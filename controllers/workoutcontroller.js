const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// get all workouts
const getAllWorkouts = async (req, res) => {
	const allWorkouts = await Workout.find().sort({ createdAt: -1 })
	res.status(200).json(allWorkouts)
}

// get a single workout
const getSingleWorkout = async (req, res) => {
	const { id } = req.params
	let singleWorkout
	//validating the id
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ err: 'id is not valid' })
	}
	//geting the single item
	try {
		singleWorkout = await Workout.findById(id)
		if (!singleWorkout) {
			return res.status(404).json({ err: 'no such workout' })
		}
		res.status(200).json(singleWorkout)
	} catch (err) {
		res.status(400).json({ err: err.message })
	}
}

// post or create a new workout
const createWorkout = async (req, res) => {
	const { title, reps, load } = req.body
	//add doc to db
	try {
		const workout = await Workout.create({ title, reps, load })
		res.status(200).json(workout)
	} catch (err) {
		res.status(400).json({ err: err.message })
	}
}

// delete a workout
const deleteWorkout = async (req, res) => {
	const { title } = req.body

	try {
		const deleteWorkout = await Workout.deleteOne({ title })
		res.status(200).json(deleteWorkout)
	} catch (err) {
		res.status(400).json({ err: err.message })
	}
}

// update a workout

module.exports = {
	createWorkout,
	getAllWorkouts,
	getSingleWorkout,
	deleteWorkout,
}
