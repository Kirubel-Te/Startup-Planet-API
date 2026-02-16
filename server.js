import express from 'express'
import {startups} from './data/data.js'
import apiRouter from './routes/apiRoute.js'
import cors from 'cors'

const PORT = 8000


const app = express()
app.use(cors())
app.use('/api',apiRouter)
app.use((req,res) => {
    res.status(404).json({ message: "Endpoint not found. Please check the API documentation." })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})