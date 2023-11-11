import { connectToMongo } from "./db.js";
import express from 'express'
import cors from 'cors';
import userRoutes from './routes/users.js'

connectToMongo();

const app = express()
const port = 3005 || process.env.PORT;

//It is a middleware to request showing on console..
app.use(express.json())
app.use(cors({
  origin:"*",
  credentials:true,
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use('/api',userRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })