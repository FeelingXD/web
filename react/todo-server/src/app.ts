import express from 'express'
import morgan from 'morgan'
import router from './routes'

const app = express()
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api', router)

export default app