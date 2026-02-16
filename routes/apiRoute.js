import getAllData from '../controllers/getAllData.js'
import DataByParams from '../controllers/getAllDataByParams.js'
import express from 'express'

const apiRouter = express.Router()

apiRouter.get('/', getAllData)
apiRouter.get('/:field/:term', DataByParams)

export default apiRouter
