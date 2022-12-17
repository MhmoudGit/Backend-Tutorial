require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')


//express app
const app = express()
//enable cors
const cors = require('cors')

app.use(cors())

//middleware
app.use(express.json())
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.set('strictQuery', false)
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		//listen for requests
		app.listen(process.env.PORT, () => {
			console.log(`connected to db & now listening on port`, process.env.PORT)
		})
	})
	.catch((err) => console.log(err))
